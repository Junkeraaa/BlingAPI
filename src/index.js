import dotenv from 'dotenv';
import express from 'express';
import cors from 'cors';
import { fileURLToPath } from 'url'; // Importa a função fileURLToPath para converter a URL do módulo em um caminho de arquivo
import path from 'path'; // Importe o módulo 'path'
import { getAuthorizationCode } from './controller/Authorization.js';
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
    const { code } = req.query;
    if (!code) {
        return res.status(400).json({ error: "Authorization code is required." });
    } else { 
        // Utilize a variável numberToFilterOrder onde for necessário no restante do código
        console.log(numberToFilterOrder+'======================')
        console.log(`Número para filtrar pedidos: ${numberToFilterOrder}`);
        const authorizationCode = await getAuthorizationCode(code);
        console.log(`TESTE - AUTHORIZATION CODE: ${authorizationCode}`)
        const sale = await getSalesOrder(authorizationCode);
        console.log(`TESTE - SALE: ${sale}`);
        const ordersId = filterOrdersByOrderNumber([1907, 1908, 1911], sale)
        console.log(`TESTE - ORDERS ID: ${ordersId}`);
        const orderTest = await getSaleOrder(authorizationCode, ordersId[0])
        console.log(`TESTE - GET PEDIDO: ${orderTest}`)
        const teste = await AddSaleOrder(authorizationCode, orderTest, 2008)
        console.log(`TESTE - PEDIDO ADICIONADO: ${teste}`)
    }
});

server.listen(process.env.PORT, () => {
    console.log(`API ${process.env.PORT} Conected!`);
});
