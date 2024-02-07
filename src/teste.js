import { getAuthorizationCode } from './services/auth/authorizationService.js';
import { getContactId } from './services/contacts/contactService.js';
import { getLastNumberOrder } from './services/order/getSalesOrderService.js';
import { getSalespersonId, getSpecificSellerName, getSelledIdByName } from './services/seller/sellerService.js'
import fluxoCompleto from './fluxoCompleto.js';

// import { fluxoEndToEnd } from './fluxoEndToEnd.js'
        const authorizationCodeUniversal = "c0f4914f1a6e4729ad3bb83c2022a219e97aab31";
        const authorization02 = "f8c82e2cf1b0d4572cd82b2e77757a34ed7c9c44";
        // await getSelledIdByName(authorization02, "Marcelo Santana")
        // await fluxoCompleto(authorizationCodeUniversal, authorization02, [1911])
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
