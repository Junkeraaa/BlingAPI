import querystring from 'querystring';
import 'dotenv'
import axiosInstanceCode from '../../connection/axios.js';

export async function getAuthorizationCode(systemCode, systemId) {

    let basicToken;

    switch (systemId) {
        case 'SYSA': {
            const data = `${process.env.CLIENT_SYSTEM_A}:${process.env.SECRET_SYSTEM_A}`;
            const bufferData = Buffer.from(data);
            basicToken = bufferData.toString('base64');
            break;
        }

        case 'SYSB': {
            const data = `${process.env.CLIENT_SYSTEM_B}:${process.env.SECRET_SYSTEM_B}`;
            const bufferData = Buffer.from(data);
            basicToken = bufferData.toString('base64');
            break;
        }

        case 'SYSC': {
            const data = `${process.env.CLIENT_SYSTEM_C}:${process.env.SECRET_SYSTEM_C}`;
            const bufferData = Buffer.from(data);
            basicToken = bufferData.toString('base64');
            break;
        }
    }
    
    const formData = {
        grant_type: 'authorization_code',
        code: systemCode
    }

    const formEncodedData = querystring.stringify(formData);

    const response = await axiosInstanceCode.post(`oauth/token`, formEncodedData, {
        headers: {
            'Authorization': `Basic ${basicToken}`,
            'Content-Type': 'application/x-www-form-urlencoded'
        }
    });

    const code = response.data.access_token;
    return (code)
}
