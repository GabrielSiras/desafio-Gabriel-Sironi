class CaixaDaLanchonete {
    calcularValorDaCompra(metodoDePagamento, itens, number) {

        const texto = 'Bem vindo(a) a lanchonete da DB!\nA seguir segue o nosso cardápio:\n'
        console.log(cafe);

        let cafe = 3.00;

        const descontoDinheiro = 0.05;

        let valorTotal = 0;

        for (const item of itens) {
            const nomeItem = item.nome;
            const quantidade = item.quantidade || 1;
            const valorItem = cardapio[nomeItem];

            if (valorItem != cardapio[nomeItem]) {
                return "Item inválido!"
            }

            if (nomeItem.includes("extra")) {
                const itemPrincipal = nomeItem.split(" (extra")[0];
                if (!itens.find(it => it.nome === itemPrincipal)) {
                    return "Item extra não pode ser pedido sem o principal";
                }
            }
            valorTotal += valorItem * quantidade;

            if (itens.length === 0) {
                return "Não há itens no carrinho de compra!";
            }

            if (valorTotal === 0) {
                return "Quantidade inválida!";
            }

            switch (metodoDePagamento) {
                case "Dinheiro":
                    valorTotal -= valorTotal * descontoDinheiro;
                    return `R$ ${valorFinal}`;
                    break;
                    valorTotal -= valorTotal * descontoDinheiro;
            }

            const valorFinal = valorTotal.toFixed(2);

            return `R$ ${valorFinal}`;
        }
    }

}
    const mensagemCompra = calcularValorDaCompra(itens, metodoDePagamento);
    console.log(mensagemCompra);
    return "";

export { CaixaDaLanchonete };