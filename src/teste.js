import { getAuthorizationCode } from './services/auth/authorizationService.js';
import { getAllContacts, getContactId } from './services/contacts/contactService.js';
import { getAllProducts, getProductId } from './services/product/productService.js';
import { getAllSalesOrder, getLastNumberOrder } from './services/order/getSalesOrderService.js';
import { getSalespersonId, getSpecificSellerName } from './services/seller/sellerService.js'
import { fluxoEndToEnd } from './fluxoEndToEnd.js'
// import { filterOrdersByOrderNumber, getAllSalesOrder, getSpecificSaleOrder, getLastNumberOrder } from './controller/getSalesOrder.js';
// import { AddSaleOrder } from './controller/AddOrder.js';

        
        // await getSalespersonId(authorizationCodeUniversal, "MIGUEL")
        // await getSpecificSellerName(authorizationCodeUniversal, "15596220514")
        // await getAllSalespersons(authorizationCodeUniversal);
        // const authorizationCode = await getAuthorizationCode(code, "SYSB");
        // console.log(authorizationCode)
        // const allContacts = await getAllContacts(authorizationCodeUniversal)
        // console.log(allContacts.length)
        // await getContactId(authorizationCodeUniversal, "MARCELO FEHER PESTANA")
        // console.log(`TESTE - AUTHORIZATION CODE: ${authorizationCode}`)
       
        // const teste = await getLastNumberOrder(authorizationCode2);
        // await getAllProducts(authorizationCodeUniversal);
        // await getProductId(authorizationCodeUniversal, "BARRA ROSCADA GALV ELET 1/4X3MT")
        // const sale = await getAllSalesOrder(authorizationCodeUniversal);
        // const biggestNumber = getLastNumberOrder(sale)
        // console.log(`maior numero de pedido: ${biggestNumber}`)
        // console.log(`TESTE - SALE: ${sale}`);
        // const ordersId = filterOrdersByOrderNumber([2001, 2002, 2003], sale)
        // console.log(`TESTE - ORDERS ID: ${ordersId}`);
        // const orderTest = await getSpecificSaleOrder(authorizationCode, ordersId[0])
        // console.log(`TESTE - GET PEDIDO: ${orderTest}`)
        // const teste = await AddSaleOrder(authorizationCode, orderTest, 2008)
        // console.log(`TESTE - PEDIDO ADICIONADO: ${teste}`)
