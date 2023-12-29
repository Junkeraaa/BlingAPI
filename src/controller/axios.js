// axios.js
import axios from 'axios';
import dotenv from 'dotenv';

dotenv.config();

const axiosInstance = await axios.create({
  baseURL: 'https://www.bling.com.br/Api/v3/',
  headers: {
    Authorization: 'Bearer ' + process.env.API_TOKEN_ACCOUNT_1,
  },
});

export default axiosInstance;

