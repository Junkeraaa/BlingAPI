import dotenv from 'dotenv';
import express from 'express';
import cors from 'cors';
import { fileURLToPath } from 'url'; // Importa a função fileURLToPath para converter a URL do módulo em um caminho de arquivo
import path from 'path'; // Importe o módulo 'path'
import { getAuthorizationCode } from './controller/Authorization.js';
// Will use later
import { getSalesOrder, filterOrdersByOrderNumber, getSaleOrder } from './controller/getSalesOrder.js';
import { AddSaleOrder } from './controller/AddOrder.js';

dotenv.config();

const server = express();
server.use(cors());
server.use(express.json());

// Obtemos o caminho do diretório do arquivo atual
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Defina o caminho completo para o arquivo HTML
const indexPath = path.join(__dirname, 'public', 'index.html');

server.get("/", (req, res) => {
    res.sendFile(indexPath);
});

// Variável para armazenar o número inserido
let numberToFilterOrder = null;

// Rota para receber o número inserido e armazená-lo na variável
server.post("/setNumberToFilterOrder", (req, res) => {
    const { number } = req.body;
    numberToFilterOrder = number;
    res.send("Número inserido com sucesso.");
});

server.get("/authorization01", async (req, res) => { 
    const { code, system } = req.query;
    if (!code) {
        return res.status(400).json({ error: "Authorization code is required." });
    } else { 
        console.log(numberToFilterOrder+'======================')
        console.log(`Número para filtrar pedidos: ${numberToFilterOrder}`);
        const authorizationCode = await getAuthorizationCode(code);
        res.writeHead(301, {
            Location: `http://localhost:3000/q?system=${system}&token=${authorizationCode}`
          }).end();
    }
    res.send();
});

server.listen(process.env.PORT, () => {
    console.log(`API ${process.env.PORT} Conected!`);
});
