/**
O que faz? Cria um novo array com o mesmo número de elementos, onde cada elemento é o resultado da função que você passou.

Analogia: Uma máquina de transformação. Você insere um array de lagartas, a máquina aplica uma "função casulo" em cada uma, e do outro lado sai um novo array de borboletas. O array original de lagartas permanece intacto.

Retorno: Um novo array do mesmo tamanho.
 */

//Exemplo:

const herois = [
    {nome: "Batman", poder: "Dinheiro", classe: "Heroe"},
    {nome: "Flash", poder: "Velocidade", classe: "Heroe"},
    {nome: "Aquaman", poder: "Agua", classe: "Heroe"},
    {nome: "homem aranha", poder: "Aranha", classe: "Heroe"},
]

const nomeDosHerois = herois.map(herois => {
    return herois.nome
})

console.log(" ---- Usando map para pegar os nomes dos herois ----")
console.log(nomeDosHerois)