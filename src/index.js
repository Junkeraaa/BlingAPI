import dotenv from 'dotenv';
import express from 'express';
import cors from 'cors';
dotenv.config();

// Controllers
import AuthorizationController from './controller/auth/authorizationController.js';


const server = express();
server.use(cors());
server.use(express.json());


server.use(AuthorizationController);

server.listen(process.env.PORT, () => {
    console.log(`API ${process.env.PORT} Conected!`);
});
