import axiosInstanceCode from './axios.js';

export async function AddSaleOrder(authorizationCode, orderToAdd, newNumberOrder) {
    console.log("Adicionando pedido de venda!");
    orderToAdd.numero = newNumberOrder;
    try {
        const response = await axiosInstanceCode.post(
            `pedidos/vendas`,
            orderToAdd,
            {
                headers: {
                    'Authorization': `Bearer ${authorizationCode}`
                }
            }
        );

        console.log(`Pedido cadastrado com sucesso`);
        return response.data.data;
        // Faça algo com a resposta aqui
    } catch (error) {
        console.error("Erro na solicitação:", error.response.data.error.fields[0]);
        // Trate o erro aqui, se necessário
    }
}