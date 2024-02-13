import { Router } from "express"; 

const server = new Router();

server.post("/mock", async (req, res) => { 
    // Data example
    //{
    //    "data": [
    //        {
    //            "numeroAntigoDoPedido": 2010,
    //            "numeroNovoDoPedido": 596,
    //            "status": "Sucesso"
    //        },
    //        {
    //            "numeroAntigoDoPedido": 2410,
    //            "Erro": "O número de pedido informado não existe",
    //            "status": "Erro na aplicação"
    //        }
    //    ]
    //}
    
    res.send({
        data: [
            {
                "numeroAntigoDoPedido": 2010,
                "numeroNovoDoPedido": 596,
                "status": "Sucesso"
            },
            {
                "numeroAntigoDoPedido": 2410,
                "Erro": "O número de pedido informado não existe",
                "status": "Erro na aplicação"
            }
        ]
    });
});


export default server