// axios.js
import axios from 'axios';
import dotenv from 'dotenv';
dotenv.config();

const axiosInstanceCode = axios.create({
    baseURL: "https://www.bling.com.br/Api/v3/",
})

export default axiosInstanceCode
