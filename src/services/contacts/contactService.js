import axiosInstanceCode from '../../connection/axios.js';
import removerAcentos from '../common/functions.js';

export async function getContactId(authorizationCode, clientName) {
    // console.log("Acessando id do cliente!");

    try {
        // const allContacts = await getAllContacts(authorizationCode);
        let contactId;
        const response = await axiosInstanceCode.get(`contatos?pesquisa=${clientName}`, {
            headers: {
                'Authorization': `Bearer ${authorizationCode}`
            }
        });
        
        if (response.data.data.length > 0) {
            contactId = response.data.data[0].id;
        } else {
            contactId = 0;
        }
        
        return contactId;
    } catch (error) {
        console.error("Erro na solicitação:", error);
        return null;
    }
}

