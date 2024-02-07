import axiosInstanceCode from '../../connection/axios.js';
import removerAcentos from '../common/functions.js';

export async function getProductIdByName(productName) {
    // console.log("Acessando id do produto!");

    try {
        let productId;
        let nomeProduto = productName;
        nomeProduto.removerAcentos();
        nomeProduto.toLowerCase();
        const response = await axiosInstanceCode.get(`produtos?nome=${nomeProduto}`, {
            headers: {
                'Authorization': `Bearer ${authorizationCode}`
            }
        });

        productId = response.data.id
        return productId;
    } catch (error) {
        console.error("Erro na solicitação:", error.response.data.error);
        return null;
    }
}
