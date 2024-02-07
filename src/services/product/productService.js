import axiosInstanceCode from '../../connection/axios.js';
import removerAcentos from '../common/functions.js';

export async function getProductId(productName) {
    // console.log("Acessando id do produto!");

    try {
        let productId;
        const response = await axiosInstanceCode.get(`produtos?nome=${productName}`, {
            headers: {
                'Authorization': `Bearer ${authorizationCode}`
            }
        });
        return productId;
    } catch (error) {
        console.error("Erro na solicitação:", error.response.data.error.fields[0]);
        return null;
    }
}
