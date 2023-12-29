// index.js
import { getToken } from './controller/Connection.js';

(async function startCode() {
  console.log("teste2121");

  try {
    const token = await getToken();
    console.log('Token:', token);
  } catch (error) {
    console.error('Erro ao obter o token:', error.message);
  }
}());
