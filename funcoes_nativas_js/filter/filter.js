/**
O que faz? Cria um novo array contendo apenas os elementos do array original que passam em um teste (ou seja, para os quais sua função retorna true).

Analogia: Um segurança de uma festa VIP. Ele olha cada pessoa (elemento) na fila (array original). Se a pessoa estiver na lista (a função retorna true), ela entra na festa (novo array). Se não, ela é barrada.

Retorno: Um novo array, que pode ser menor ou do mesmo tamanho que o original.
 */

//Exemplo:

const herois = [
    {nome: "Batman", poder: "Dinheiro", classe: "Heroe", justiceLeague: true},
    {nome: "Flash", poder: "Velocidade", classe: "Heroe", justiceLeague: true},
    {nome: "Aquaman", poder: "Agua", classe: "Heroe", justiceLeague: true},
    {nome: "homem aranha", poder: "Aranha", classe: "Heroe", justiceLeague: false},
]

const apenasHerois = herois.filter(herois => {
    return herois.justiceLeague === false
});

console.log(" ---- Usando filter para pegar apenas os herois ----")
console.log(apenasHerois)