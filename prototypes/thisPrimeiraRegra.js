// Existem 4 regras principais que definem o valor do this.

/**
 * Regra 1: Chamada de Método de Objeto
Quando uma função é chamada como um método de um objeto (objeto.metodo()), 
o this dentro dessa função aponta para o objeto à esquerda do ponto.
 */

const heroi = {
    nome: "Batman",
    identidadeSecreta: "Bruce Wayne",
    poder: "Dinheiro",
    saudacao: function() {
        console.log(`Ola ${this.identidadeSecreta}, o poder de ${this.poder} te pertence!`);
    }
}

heroi.saudacao() //  Saída: Eu sou o Batman. (this === heroi)