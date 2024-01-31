// axios.js
import axios from 'axios';
import dotenv from 'dotenv';
dotenv.config();

const axiosInstanceCode = axios.create({
    baseURL: process.env.BASE_URL,
})

export default axiosInstanceCode
