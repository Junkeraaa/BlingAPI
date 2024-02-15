import axiosInstanceCode from '../../connection/axios.js';

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
        console.log(response.data.data.id)
        // Retorna "sucesso" em caso de sucesso
        return "Sucesso";
    } catch (error) {
        console.error("Erro na solicitação:", error.response.data.error.fields[0]);
        
        // Retorna "erro" em caso de falha
        return "Erro na aplicação";
    }
}
