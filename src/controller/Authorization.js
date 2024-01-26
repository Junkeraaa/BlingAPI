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
        const code = response.data.access_token;
        console.log(`Authorization code gerado com sucesso: ${code}`)
        return(code)
        // Faça algo com a resposta aqui
    } catch (error) {
        console.error("Erro na solicitação:", error.response.data);
        // Trate o erro aqui, se necessário
    }
}
