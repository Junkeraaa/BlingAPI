// axios.js
import axios from 'axios';
import dotenv from 'dotenv';
dotenv.config();

const axiosInstanceCode = axios.create({
    baseURL: 'https://www.bling.com.br/Api/v3/',
    headers: {
        'Authorization': 'Basic NWYxOGQ1NjNjZjM0NGZjZjEwM2YyOWY1YmFiMjU1OTAyYmQ4NjMyYTphYjk2MzE1MDZmNzE0ZmIwMTU5NDMxN2RmZDM4MGNiOTM3Yjg0ZmIyYTI4ZDY1ZDIyOGFmN2JmODNlZTE=',
        'Content-Type': 'application/x-www-form-urlencoded',
    }
})

export default axiosInstanceCode
