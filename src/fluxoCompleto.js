
import { getIdOfSpecificSaleOrderByOrderNumber, getSpecificSaleOrderById, getLastNumberOrder } from './services/order/getSalesOrderService.js';
import { getContactId } from './services/contacts/contactService.js';
import { getSpecificSellerName, getSelledIdByName } from './services/seller/sellerService.js'
import { getProductIdByName } from './services/product/productService.js'
import { AddSaleOrder } from './services/order/AddOrderService.js'


 async function fluxoCompleto(authorizationIdSYS1, authorizationIdSYS2, numberSaleOrders){

        console.log("iniciando fluxo completo")
        let responseObjects = [];

        let lastNumberOrder = await getLastNumberOrder(authorizationIdSYS2) // Recebendo o numero do ultimo pedido adicionado no sistema destinatário.

        for(let i = 0; i < numberSaleOrders.length; i++) {

        let responseObject = {}
        responseObject.numeroAntigoDoPedido = numberSaleOrders[i]; // passando no objeto o numero antigo do pedido.
        

        try {
        
        const idOrder = await getIdOfSpecificSaleOrderByOrderNumber(authorizationIdSYS1, numberSaleOrders[i]) // Recebendo o id do pedido informado.
        
        if(idOrder === 0){
            throw new Error("O número de pedido informado não existe");
        }

        const orderSale = await getSpecificSaleOrderById(authorizationIdSYS1, idOrder) // Usando o Id para pegar o JSON completo do pedido informado.

        orderSale.contato.id = await getContactId(authorizationIdSYS2, orderSale.contato.nome)

        if(orderSale.contato.id === 0) {
            throw new Error("Existem desavenças nos dados do cliente.");
        }

        const sellerName = await getSpecificSellerName(authorizationIdSYS1, orderSale.vendedor.id) // Recebendo o nome do cliente pelo sistema 01.

        orderSale.vendedor.id = await getSelledIdByName(authorizationIdSYS2, sellerName)
        
        if(orderSale.vendedor.id === 0) {
            throw new Error("Existem desavenças nos dados do vendedor.");
        }

        for (let interactive2 = 0; interactive2 < orderSale.itens.length; interactive2++) { // For iterando sobre todos os produtos do pedido de venda
    
                       let produto = orderSale.itens[interactive2]; // Recebendo os dados do produto da vez
                
                       orderSale.itens[interactive2].produto.id = await getProductIdByName(authorizationIdSYS2, produto.descricao) // Alterando o id do produto da vez
                
                    
        }

        lastNumberOrder += 1;

        responseObject.numeroNovoDoPedido = lastNumberOrder; // Adicionando no objeto resposta o novo número do pedido.

        const responseAddSaleOrder = await AddSaleOrder(authorizationIdSYS2, orderSale, lastNumberOrder); // Adicionando o pedido a conta 02

        responseObject.status = responseAddSaleOrder

        responseObjects.push(responseObject)
        
    } catch (error){

        responseObject.Erro = error.message
        responseObject.status = "Erro na aplicação"
        responseObjects.push(responseObject)
    }

}
    
        return responseObjects

}

export default fluxoCompleto