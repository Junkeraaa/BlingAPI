import { getAuthorizationCode } from './services/auth/authorizationService.js';
import { getAllContacts, getContactId } from './services/contacts/contactService.js';
import { getAllProducts, getProductId } from './services/product/productService.js';
import { getLastNumberOrder } from './services/order/getSalesOrderService.js';
import { getSalespersonId, getSpecificSellerName } from './services/seller/sellerService.js'
import fluxoCompleto from './fluxoCompleto.js';
// import { fluxoEndToEnd } from './fluxoEndToEnd.js'
        const authorizationCodeUniversal = "9465680fb013d17946594a83e81020c074d69f31";
        const authorization02 = "ca868b0da09d1e942e089114cb62d58b20859b7c";
        await fluxoCompleto(authorizationCodeUniversal, authorization02, [2011, 2010])
        //await getSpecificSaleOrderByOrderNumber(authorizationCodeUniversal, 2011);
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
        // console.log(`TESTE - ORDERS ID: ${ordersId}`);
        // const orderTest = await getSpecificSaleOrder(authorizationCode, ordersId[0])
        // console.log(`TESTE - GET PEDIDO: ${orderTest}`)
        // const teste = await AddSaleOrder(authorizationCode, orderTest, 2008)
        // console.log(`TESTE - PEDIDO ADICIONADO: ${teste}`)
