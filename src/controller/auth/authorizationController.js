import { Router } from "express";
import { getAuthorizationCode } from "../../services/auth/authorizationService.js";


const server = Router();

server.get("/teste",(req, res) => {
    res.send(process.env.CLIENT_SYSTEM_A);
})


server.get("/authorization", async (req, res) => { 
    try {
        const { code, system } = req.query;
        res.send(process.env.CLIENT_SYSTEM_A + process.env.SECRET_SYSTEM_A + code + system);
        if (!code) {
            return res.status(400).json({ error: "Authorization code is required. Teste Luis" });
        } else { 
            
            const authorizationCode = await getAuthorizationCode(code, system);
            res.writeHead(301, {
                Location: `https://65c1a985d33d0f25612fdadd--clever-queijadas-65043d.netlify.app/q?system=${system}&token=${authorizationCode}`
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
