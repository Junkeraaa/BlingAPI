// Connection.js
import axios from 'axios';

export async function getToken() {
  const apiURL = 'https://www.bling.com.br/Api/v3/oauth/grant-code';

  const config = {
    headers: {
      'Content-Type': 'application/json',
    },
    body: {
      "client_id": "ec2f04e488a106d1b2ce41267cb161a186b0c411",
    }
  };

  try {
    const response = await axios.post(apiURL, config);
    console.log('Resposta:', response.data);
    return response.data;
  } catch (error) {
    console.log('Erro:', error);
    throw error;
  }
}
