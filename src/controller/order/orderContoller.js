import { Router } from "express";
import fluxoCompleto from '../../fluxoCompleto.js'


const server = Router();



server.post("/sendOrderSale", async (req, res, next) => { 
    try {
    const { authorizationCodeSYS01, authorizationCodeSYS02, numberSaleOrders } = req.body;
        if (authorizationCodeSYS01 === authorizationCodeSYS02) {
            return res.status(400).json({ error: "Sending from the same system to itself is not allowed." });
        } else { 
            
            const responseObject = await fluxoCompleto(authorizationCodeSYS01, authorizationCodeSYS02, numberSaleOrders);
            res.send({
                data: responseObject
            });
        }
    }catch(err) {
        console.log("Didng work dude");
        next(err.message);
    }
});


export default server;