import { all } from 'axios';
import axiosInstanceCode from '../../connection/axios.js';

export async function getAllSalespersons(authorizationCode) {
    let allSalespersons = [];
    let pageNumber = 1;

    try {
        while (true) {
            const response = await axiosInstanceCode.get('vendedores', {
                params: {
                    pagina: pageNumber,
                    limite: 100
                },
                headers: {
                    'Authorization': `Bearer ${authorizationCode}`
                }
            });

            if (response.data.data.length === 0) {
                break;
            }

            allSalespersons = allSalespersons.concat(response.data.data);
            pageNumber++;
        }
        console.log(allSalespersons)
        return allSalespersons;
    } catch (error) {
        console.error("Erro na solicitação:", error.response.data.error.fields[0]);
        return [];
    }
}

export async function getSalespersonId(authorizationCode, salespersonName) {
    console.log("Acessando id do vendedor!");

    try {
        const allSalespersons = await getAllSalespersons(authorizationCode);
        let salespersonId = 0;

        for (let i = 0; i < allSalespersons.length; i++) {
            const salesperson = allSalespersons[i];
            if (salesperson.contato.nome === salespersonName) {
                salespersonId = salesperson.id;
                break;
            }
        }

        console.log(`Total de vendedores: ${allSalespersons.length}`);
        console.log(`ID do vendedor: ${salespersonId}`);
        return salespersonId;
    } catch (error) {
        console.error("Erro na solicitação:", error.response.data.error.fields[0]);
        return null;
    }
}

export async function getSpecificSellerName(authorizationCode, sellerId) {
    console.log("Recebendo dados do vendedor!");
    try {
        const response = await axiosInstanceCode.get(
            `vendedores/${sellerId}`,
            {
                headers: {
                    'Authorization': `Bearer ${authorizationCode}`
                }
            }
        );

        console.log(response.data.data.contato.nome);
        return response;
        // Faça algo com a resposta aqui
    } catch (error) {
        console.error("Erro na solicitação:", error);
        // Trate o erro aqui, se necessário
    }
}
