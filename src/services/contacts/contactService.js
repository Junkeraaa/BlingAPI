import axiosInstanceCode from '../../connection/axios.js';

export async function getContactId(clientName, authorizationCode) {
    // console.log("Acessando id do cliente!");

    try {
        // const allContacts = await getAllContacts(authorizationCode);
        let contactId;
        const response = await axiosInstanceCode.get(`contatos?pesquisa=${clientName}`, {
            headers: {
                'Authorization': `Bearer ${authorizationCode}`
            }
        });
        contactId = response.data.id
        return contactId;
    } catch (error) {
        console.error("Erro na solicitação:", error.response.data.error);
        return null;
    }
}
