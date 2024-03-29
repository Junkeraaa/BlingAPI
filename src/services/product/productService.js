import axiosInstanceCode from '../../connection/axios.js';
import removerAcentos from '../common/functions.js';

export async function getProductIdByName(authorizationCode, productName) {
    // console.log("Acessando id do produto!");

    try {
        let productId;
        const response = await axiosInstanceCode.get(`produtos?nome=${productName}`, {
            headers: {
                'Authorization': `Bearer ${authorizationCode}`
            }
        });

        productId = response.data.data[0].id
        return productId;
    } catch (error) {
        console.error("Erro na solicitação:", error);
        return null;
    }
}
