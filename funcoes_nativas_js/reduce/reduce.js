/**
O que faz? Executa uma função em cada elemento do array para "reduzi-lo" a um único valor final. É o mais poderoso e, no início, o mais complexo de entender.

Analogia: Fazer a massa de um bolo. Você começa com uma tigela vazia (valor inicial). A cada passo, você pega um ingrediente (elemento atual) da sua lista e o combina com o que já está na tigela (acumulador). No final, você não tem mais uma lista de ingredientes, você tem uma única coisa: a massa do bolo (valor final).

Retorno: Um único valor (pode ser um número, uma string, um objeto, qualquer coisa).
 */

//Exemplo:

const DcAndMarvel = [
    {nome: "Batman", poder: "Dinheiro", classe: "Heroe", justiceLeague: true},
    {nome: "Flash", poder: "Velocidade", classe: "Heroe", justiceLeague: true},
    {nome: "Darkside", poder: "Cosmico", classe: "vilan", justiceLeague: false},
    {nome: "hulk", poder: "super força", classe: "Heroe", justiceLeague: false},
    {nome: "homem aranha", poder: "Aranha", classe: "Heroe", justiceLeague: false},
    {nome: "Deadpool", poder: "Regeneração", classe: "Anti Heroe", justiceLeague: false},
];

const niveis = [15, 16, 14];

const poderTotal = niveis.reduce((acumulador, nivelAtual) => {
    // cada passo, o acumulador guarda a soma parcial.
    return acumulador + nivelAtual
}, 0); // o 0 é o nossa "massa inicial", o valor inicial do acumulador.

console.log(" ---- Usando reduce para pegar o poder total ----")
console.log(poderTotal)