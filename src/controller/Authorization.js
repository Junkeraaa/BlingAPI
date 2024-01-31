import querystring from 'querystring';
import 'dotenv'
import axios from 'axios';

export async function getAuthorizationCode(code, systemId) {
    console.log("get authorization code...");
    let basicToken;
    
    switch (systemId) {
        case 'SYSA': {
            let data = `${process.env.CLIENT_SYSTEM_A}:${process.env.SECRET_SYSTEM_A}`      
            let bufferData = new Buffer(data);
            basicToken = bufferData.toString('base64');
            break;
        }
        
        case 'SYSB': {
            let data = `${process.env.CLIENT_SYSTEM_B}:${process.env.SECRET_SYSTEM_B}`      
            let bufferData = new Buffer.from(data);
            basicToken = bufferData.toString('base64');
            break;
        }
    }
    

    const formData = {
        grant_type: 'authorization_code',
        code: code
    }
    const formEncodedData = querystring.stringify(formData);
    try {
        const response = await axios.post(`${process.env.API_URL}oauth/token`, formEncodedData, {
            headers: {
                'Authorization': `Basic ${basicToken}`,
                'Content-Type': 'application/x-www-form-urlencoded'
            }
        });

        const code = response.data.access_token;
        console.log(`Authorization code gerado com sucesso: ${code}`)
        return(code)
        // Faça algo com a resposta aqui
    } catch (error) {
        console.error("Erro na solicitação:", error.message);
        // Trate o erro aqui, se necessário
    }
}
