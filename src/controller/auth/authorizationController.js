import { Router } from "express";
import { getAuthorizationCode } from "../../services/auth/authorizationService.js";


const server = Router();


server.get("/authorization", async (req, res) => { 
    try {
        const { code, system } = req.query;
        if (!code) {
            return res.status(400).json({ error: "Authorization code is required. Teste Luis" });
        } else { 
            
            const authorizationCode = await getAuthorizationCode(code, system);
            res.writeHead(301, {
                Location: `https://65c3a804143d594536d65512--curious-daifuku-5ab2c0.netlify.app/q?system=${system}&token=${authorizationCode}`
              }).end();
        }
        res.send();
    }catch(err) {
        res.send({
            err: err,
            msg: err.message
        });
    }
});


export default server;
