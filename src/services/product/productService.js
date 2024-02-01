import axiosInstanceCode from '../../connection/axios.js';

export async function getAllProducts(authorizationCode) {
    let allProducts = [];
    let pageNumber = 1;

    try {
        while (true) {
            const response = await axiosInstanceCode.get('produtos', {
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

            allProducts = allProducts.concat(response.data.data);
            pageNumber++;
        }

        return allProducts;

    } catch (error) {
        console.error("Erro na solicitação:", error.response.data.error.fields[0]);
        return [];
    }
}




export async function getProductId(authorizationCode, productName) {
    console.log("Acessando id do produto!");

    try {
        const allProducts = await getAllProducts(authorizationCode);
        let productId = 0;

        for (let i = 0; i < allProducts.length; i++) {
            const product = allProducts[i];
            if (product.nome === productName) {
                productId = product.id;
                break;
            }
        }

        console.log(`Total de produtos: ${allProducts.length}`);
        console.log(`ID do contato: ${productId}`);
        return productId;
    } catch (error) {
        console.error("Erro na solicitação:", error.response.data.error.fields[0]);
        return null;
    }
}
