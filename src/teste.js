import { getAuthorizationCode } from './controller/Authorization.js';
import { filterOrdersByOrderNumber, getAllSalesOrder, getSpecificSaleOrder, getLastNumberOrder } from './controller/getSalesOrder.js';
import { AddSaleOrder } from './controller/AddOrder.js';

        // const code = "6999bc729517db406ded6db3d77203e4093e6c93";
        // console.log(`Code: ${code}`)
        // const authorizationCode = await getAuthorizationCode(code, "SYSB");
        // console.log(`TESTE - AUTHORIZATION CODE: ${authorizationCode}`)
        const authorizationCode = "b5365b1acd8c0529769b92c0421795ded7230a3d";
        const teste = await getLastNumberOrder(authorizationCode);
        console.log(`teste: ${teste}`)
        // const sale = await getAllSalesOrder(authorizationCode);
        // console.log(`TESTE - SALE: ${sale}`);
        // const ordersId = filterOrdersByOrderNumber([2001, 2002, 2003], sale)
        // console.log(`TESTE - ORDERS ID: ${ordersId}`);
        // const orderTest = await getSpecificSaleOrder(authorizationCode, ordersId[0])
        // console.log(`TESTE - GET PEDIDO: ${orderTest}`)
        // const teste = await AddSaleOrder(authorizationCode, orderTest, 2008)
        // console.log(`TESTE - PEDIDO ADICIONADO: ${teste}`)
