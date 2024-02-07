import { all } from 'axios';
import axiosInstanceCode from '../../connection/axios.js';

export async function getSelledIdByName(authorizationCode, sellerName) {

    try {
    
            const response = await axiosInstanceCode.get(`vendedores?nomeContato=${sellerName}`, {
                headers: {
                    'Authorization': `Bearer ${authorizationCode}`
                }
            });
        return response.data.data[0].id;
    } catch (error) {
        console.error("Erro na solicitação:", error);
        return [];
    }
}

export async function getSalespersonId(allSalespersons, salespersonName) {
    // console.log("Acessando id do vendedor!");

    try {
        // const allSalespersons = await getAllSalespersons(authorizationCode);
        let salespersonId = 0;

        for (let i = 0; i < allSalespersons.length; i++) {
            const salesperson = allSalespersons[i];
            if ((salesperson.contato.nome).toLowerCase() === (salespersonName).toLowerCase()) {
                salespersonId = salesperson.id;
                break;
            }
        }

        //console.log(`Total de vendedores: ${allSalespersons.length}`);
        //console.log(`ID do vendedor: ${salespersonId}`);
        return salespersonId;
    } catch (error) {
        console.error("Erro na solicitação:", error);
        return null;
    }
}

export async function getSpecificSellerName(authorizationCode, sellerId) {
    
    try {
        const response = await axiosInstanceCode.get(
            `vendedores/${sellerId}`,
            {
                headers: {
                    'Authorization': `Bearer ${authorizationCode}`
                }
            }
        );

       // console.log(response.data.data.contato.nome);
        return response.data.data.contato.nome;
        // Faça algo com a resposta aqui
    } catch (error) {
        console.error("Erro na solicitação:", error);
        // Trate o erro aqui, se necessário
    }
}
