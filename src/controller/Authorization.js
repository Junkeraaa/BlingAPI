import axiosInstanceCode from './axios.js';
import querystring from 'querystring';

export async function getAuthorizationCode(code) {
    console.log("get authorization code...");
    const formData = {
        grant_type: 'authorization_code',
        code: code
    }
    const formEncodedData = querystring.stringify(formData);
    try {
        const response = await axiosInstanceCode.post(`oauth/token`, formEncodedData);
        console.log(response.data);
        return(response.data.acess_token)
        // Faça algo com a resposta aqui
    } catch (error) {
        console.error("Erro na solicitação:", error.data);
        // Trate o erro aqui, se necessário
    }
}
