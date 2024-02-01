import axiosInstanceCode from '../../connection/axios.js';

export async function getAllContacts(authorizationCode) {
    let allContacts = [];
    let pageNumber = 1;

    try {
        while (true) {
            const response = await axiosInstanceCode.get('contatos', {
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

            allContacts = allContacts.concat(response.data.data);
            pageNumber++;
        }

        return allContacts;
    } catch (error) {
        console.error("Erro na solicitação:", error.response.data.error);
        return [];
    }
}




export async function getContactId(clientName, allContacts) {
    // console.log("Acessando id do cliente!");

    try {
        // const allContacts = await getAllContacts(authorizationCode);
        let contactId = 0;

        for (let i = 0; i < allContacts.length; i++) {
            const contact = allContacts[i];
            if (contact.nome.toLowerCase() === clientName.toLowerCase()) {
                contactId = contact.id;
                break;
            }
        }

       // console.log(`Total de contatos: ${allContacts.length}`);
       // console.log(`ID do contato: ${contactId}`);
        return contactId;
    } catch (error) {
        console.error("Erro na solicitação:", error.response.data.error.fields[0]);
        return null;
    }
}
