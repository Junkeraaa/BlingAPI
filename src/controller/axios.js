// axios.js
import axios from 'axios';
import dotenv from 'dotenv';

const axiosInstanceCode = axios.create({
    baseURL: 'https://www.bling.com.br/Api/v3/',
    headers: {
        Authorization: process.env.SECRET_ID,
        'Content-Type': 'application/x-www-form-urlencoded',
    }
})

export default axiosInstanceCode
