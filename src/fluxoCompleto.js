
import { getIdOfSpecificSaleOrderByOrderNumber, getSpecificSaleOrderById } from './services/order/getSalesOrderService.js';

 async function fluxoCompleto(authorizationIdSYS1, authorizationIdSYS2, numberSaleOrders){
    for(let i = 0; i < numberSaleOrders.length; i++) {
        const idOrder = await getIdOfSpecificSaleOrderByOrderNumber(authorizationIdSYS1, numberSaleOrders[i])
        const orderSale = await getSpecificSaleOrderById(authorizationIdSYS1, idOrder)
    }
}

export default fluxoCompleto