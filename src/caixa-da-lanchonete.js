class CaixaDaLanchonete {
    new CaixaDaLanchonete(){
        
    var cardapio = {
  cafe: 3.00,
  chantily: 1.50,
  suco: 6.20,
  sanduiche: 6.50,
  queijo: 2.00,
  salgado: 7.25,
  combo1: 9.50,
  combo2: 7.50
};
    function calcularValorDaCompra(metodoDePagamento, itens) {
        let total = 0;
        for(const item of itens){
            if(cardapio[item])
            calcularValorDaCompra += cardapio[item];
        } else {
        console.log(`Item '${item}' Item inválido!`)
    }
}
       
        return total;
}
const 
    


export { CaixaDaLanchonete };
}