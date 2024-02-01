import { Router } from "express";

const server = Router();


server.get("/sendOrderSale", async (req, res) => { 
    try {
    const { authorizationCodeSYS01, authorizationCodeSYS02, numberSaleOrders } = req.body; 
        if (authorizationCodeSYS01 === authorizationCodeSYS02) {
            return res.status(400).json({ error: "Sending from the same system to itself is not allowed." });
        } else { 
            
            const sucessOrderNumbers = await fluxoEndToEnd(authorizationCodeSYS01, authorizationCodeSYS02, numberSaleOrders);

        }
        res.send({
            data: sucessOrderNumbers
        });
    }catch(err) {
        res.send({
            err: err,
            msg: err.message
        });
    }
});


export default server;