import axiosInstanceCode from '../../connection/axios.js';

export async function getAllSalesOrder(authorizationCode) {
    let allSalesOrders = [];
    let pageNumber = 1;

    try {
        while (true) {
            const response = await axiosInstanceCode.get('pedidos/vendas', {
                params: {
                    pagina: pageNumber,
                    limite: 100
                },
                headers: {
                    'Authorization': `Bearer ${authorizationCode}`
                }
            });

            if (response.data.data.length === 0) {
        
                break;
            }

            allSalesOrders = allSalesOrders.concat(response.data.data);
            pageNumber++;
        }

        console.log(`${allSalesOrders.length} Notas recebidas`);
        return allSalesOrders;
    } catch (error) {
        console.error("Erro na solicitação:", error);
        throw new Error(err.message);
    }
}


export function filterOrdersByOrderNumber(orderNumbers, allOrders){
    const requestsAlreadyFiltered = [];

    for (let i = 0; i < allOrders.length; i++) {
        const order = allOrders[i];
        if (orderNumbers.includes(order.numero)) {
            requestsAlreadyFiltered.push(order.id);
        }
    }

    console.log(requestsAlreadyFiltered)
    return requestsAlreadyFiltered;

}

export async function getSpecificSaleOrder(authorizationCode, orderNumber) {
    console.log("Recebendo pedido de venda solicitado!");
    try {
        const response = await axiosInstanceCode.get(
            `pedidos/vendas/${orderNumber}`,
            {
                headers: {
                    'Authorization': `Bearer ${authorizationCode}`
                }
            }
        );

        // console.log(`Nota recebida: ${response.data.data}`);
        return response.data.data;
        // Faça algo com a resposta aqui
    } catch (error) {
        console.error("Erro na solicitação:", error);
        // Trate o erro aqui, se necessário
    }
}

export async function getLastNumberOrder(authorizationCode) {

    const allSalesOrder = await getAllSalesOrder(authorizationCode);
    
    let lastNumberOrder = allSalesOrder[0].numero;

    for (let i = 1; i < allSalesOrder.length; i++) {
        if (allSalesOrder[i].numero > lastNumberOrder) {
            lastNumberOrder = allSalesOrder[i].numero;
        }
    }

    return lastNumberOrder;
}
