import querystring from 'querystring';
import 'dotenv'
import axiosInstanceCode from './axios.js';

export async function getAuthorizationCode(systemCode, systemId) {
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

        case 'SYSC': {
            let data = `${process.env.CLIENT_SYSTEM_C}:${process.env.SECRET_SYSTEM_C}`      
            let bufferData = new Buffer.from(data);
            basicToken = bufferData.toString('base64');
            break;
        }
    }
    
    console.log(`basic token = ${basicToken}`);

    const formData = {
        grant_type: 'authorization_code',
        code: systemCode
    }

    const formEncodedData = querystring.stringify(formData);
    
    try {
        const response = await axiosInstanceCode.post(`oauth/token`, formEncodedData, {
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
        console.log(error.response.data.error);
        // Trate o erro aqui, se necessário
    }
}
