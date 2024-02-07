// import { getAuthorizationCode } from './services/auth/authorizationService.js';
// import { getAllContacts, getContactId } from './services/contacts/contactService.js';
// import { getAllProducts, getProductId } from './services/product/productService.js';
// import { getAllSalesOrder, getLastNumberOrder } from './services/order/getSalesOrderService.js';
// import { getAllSalespersons, getSalespersonId, getSpecificSellerName } from './services/seller/sellerService.js'
// import { AddSaleOrder } from './services/order/AddOrderService.js'

// export default async function fluxoEndToEnd(authorizationIdSYS1, authorizationIdSYS2, numberSaleOrders){

//     let sucessOrderNumbers = [] // array com os pedidos que foram executados com sucesso.

//     let errorOrderNumbers = [] // array com os pedidos que foram executados com erro.
    
//     const allSalesOrder = await getAllSalesOrder(authorizationIdSYS1); // Recebendo todos os pedidos de venda da conta 01
    
//     const allSalesPersons = await getAllSalespersons(authorizationIdSYS2); // Recebendo todos os vendedores da conta 02
    
//     const allContacts = await getAllContacts(authorizationIdSYS2); // Recebendo todos os clientes da conta 02
    
//     const allProducts = await getAllProducts(authorizationIdSYS2); // Recebendo todos os produtos da conta 02
    
//     let lastNumberOrderSale = await getLastNumberOrder(authorizationIdSYS2); // Pegando o numero do último pedido da conta 02
    
//     const filteredSalesOrderId = filterOrdersByOrderNumber(numberSaleOrders, allSalesOrder) // Filtrando os pedidos de venda pelos que o usuario indicar
    
//     for (let interactive = 0; interactive < filteredSalesOrderId.length; interactive++) { // For iterando sobre todos os pedidos de venda indicados
    
//         let saleOrder = await getSpecificSaleOrder(authorizationIdSYS1, filteredSalesOrderId[interactive]); // recebendo o dado completo do pedido da vez
    
//         saleOrder.contato.id = await getContactId(saleOrder.contato.nome, allContacts); // Alterando o id do cliente para o id da conta 02
    
//         let sellerName = await getSpecificSellerName(authorizationIdSYS1, saleOrder.vendedor.id); // Recebendo o nome do vendedor
    
//         saleOrder.vendedor.id = await getSalespersonId(allSalesPersons, sellerName); // Alterando o id do vendedor para o id da conta 02
        
//         for (let interactive2 = 0; interactive2 < saleOrder.itens.length; interactive2++) { // For iterando sobre todos os produtos do pedido de venda
    
//             let produto = saleOrder.itens[interactive2]; // Recebendo os dados do produto da vez
    
//             saleOrder.itens[interactive2].produto.id = await getProductId(allProducts, produto.descricao) // Alterando o id do produto da vez
    
//         }
        
//         lastNumberOrderSale += 1;

//         console.log(`Pedido ${interactive+1}`)

//         const responseAddSaleOrder = await AddSaleOrder(authorizationIdSYS2, saleOrder, lastNumberOrderSale); // Adicionando o pedido a conta 02

//         if(typeof responseAddSaleOrder === 'number'){
//             sucessOrderNumbers.push(responseAddSaleOrder)
//         } else {
//             errorOrderNumbers.push(responseAddSaleOrder)
//         }
//     }
//         console.log(`notas adicionadas com sucesso: `)
//         console.log(sucessOrderNumbers)
//         return sucessOrderNumbers;
// }