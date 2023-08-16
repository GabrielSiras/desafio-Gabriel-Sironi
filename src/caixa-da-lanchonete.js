class CaixaDaLanchonete {
    function calcularValorDaCompra(metodoDePagamento, itens){

        const cardapio = {
  cafe: 3.00,
  chantily: 1.50,
  suco: 6.20,
  sanduiche: 6.50,
  queijo: 2.00,
  salgado: 7.25,
  combo1: 9.50,
  combo2: 7.50
};

        const descontoDinheiro = 0.05;

        const acrescimoCredito = 0.03;

        let valorTotal = 0;

        for(const item of itens){
            const nomeItem = item.nome;
            const quantidade = item.quantidade || 1;
            const valorItem = cardapio[nomeItem];

            if(!valorItem) {
                return "Item inválido!"
                }
                
            if (nomeItem.includes("extra")){
                const itemPrincipal = nomeItem.split(" (extra")[0];
            if (!itens.find(it => it.nome === itemPrincipal)){
                    return "Item extra não pode ser pedido sem o principal";
                }
            }
                valorTotal += valorItem * quantidade;

            if (itens.length === 0){
                return "Não há itens no carrinho de compra!";
            }

            if (valorTotal === 0){
                return "Quantidade inválida!";
            }

            if (!["Dinheiro", "Débito", "Crédito"].includes(metodoDePagamento)){
                return "Forma de pagamento inválida!";
            }

            if (metodoDePagamento === "Dinheiro"){
                valorTotal -= valorTotal * descontoDinheiro;
            } else if (metodoDePagamento === "Crédito"){
                valorTotal += valorTotal * acrescimoCredito;
            }

            const valorFinal = valorTotal.toFixed(2);

            if (metodoDePagamento === "Dinheiro"){
                return `R$ ${valorFinal}`;
            } else if (metodoDePagamento === "Crédito"){
                return `R$ ${valorFinal}`;
            } else {
                return `R$ ${valorFinal}`
            }
    }

}

export { CaixaDaLanchonete };