import axiosInstanceCode from './axios.js';

export async function getSalesOrder(authorizationCode) {
    console.log("Recebendo pedido de venda!");
    try {
        const response = await axiosInstanceCode.get(
            `pedidos/vendas`,
            {
                headers: {
                    'Authorization': `Bearer ${authorizationCode}`
                }
            }
        );

        console.log(`${response.data.data.length} Notas recebidas`);
        return response.data.data;
        // Faça algo com a resposta aqui
    } catch (error) {
        console.error("Erro na solicitação:", error);
        // Trate o erro aqui, se necessário
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

export async function getSaleOrder(authorizationCode, orderNumber) {
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

        console.log(`Nota recebida: ${response}`);
        return response.data.data;
        // Faça algo com a resposta aqui
    } catch (error) {
        console.error("Erro na solicitação:", error);
        // Trate o erro aqui, se necessário
    }
}
