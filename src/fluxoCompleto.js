
import { getIdOfSpecificSaleOrderByOrderNumber, getSpecificSaleOrderById } from './services/order/getSalesOrderService.js';
import { getContactId } from './services/contacts/contactService.js';
import { getSpecificSellerName, getSelledIdByName } from './services/seller/sellerService.js'
import { getProductIdByName } from './services/product/productService.js'
import { AddSaleOrder } from './services/order/AddOrderService.js'


 async function fluxoCompleto(authorizationIdSYS1, authorizationIdSYS2, numberSaleOrders){
    let lastNumberOrder = 523
    for(let i = 0; i < numberSaleOrders.length; i++) {
        const idOrder = await getIdOfSpecificSaleOrderByOrderNumber(authorizationIdSYS1, numberSaleOrders[i])
        const orderSale = await getSpecificSaleOrderById(authorizationIdSYS1, idOrder)
        orderSale.contato.id = await getContactId(authorizationIdSYS2, orderSale.contato.nome)
        const sellerName = await getSpecificSellerName(authorizationIdSYS1, orderSale.vendedor.id)
        orderSale.vendedor.id = await getSelledIdByName(authorizationIdSYS2, sellerName)
        
        for (let interactive2 = 0; interactive2 < orderSale.itens.length; interactive2++) { // For iterando sobre todos os produtos do pedido de venda
    
                       let produto = orderSale.itens[interactive2]; // Recebendo os dados do produto da vez
                
                       orderSale.itens[interactive2].produto.id = await getProductIdByName(authorizationIdSYS2, produto.descricao) // Alterando o id do produto da vez
                
                    
        }

        const responseAddSaleOrder = await AddSaleOrder(authorizationIdSYS2, orderSale, lastNumberOrder); // Adicionando o pedido a conta 02

        lastNumberOrder += 1;
    }
    console.log("sucesso")
}

export default fluxoCompleto