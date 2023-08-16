const cardapio = {
    "cafe": 3.00,
};
class CaixaDaLanchonete {
    constructor() { }

    calcularValorDaCompra(metodoDePagamento, itens) {
        const descontoDinheiro = 0.05;

        let valorTotal = 0;

        if (itens.length === 0) {
            return "Não há itens no carrinho de compra!";
        }

        for (const item of itens) {
            const nomeItem = item.nome;
            const quantidade = item.quantidade || 1;
            const valorItem = cardapio[nomeItem];

            if (valorItem === undefined) {
                return "Item inválido!"
            }

            if (nomeItem.includes("extra")) {
                const itemPrincipal = nomeItem.split(" (extra")[0];
                if (!itens.find(it => it.nome === itemPrincipal)) {
                    return "Item extra não pode ser pedido sem o principal!";
                }
            }
            valorTotal += valorItem * quantidade;

            if (valorTotal === 0) {
                return "Quantidade inválida!";
            }

            if (metodoDePagamento === "Dinheiro") {
                valorTotal -= valorTotal * descontoDinheiro;
            }

            const valorFinal = valorTotal.toFixed(2);

            return `R$ ${valorFinal}`;

        }
        return "CaixaDaLanchonete";
    }
}
export { CaixaDaLanchonete };