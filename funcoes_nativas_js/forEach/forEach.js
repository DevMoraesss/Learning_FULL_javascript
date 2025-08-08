//O que faz? Executa uma função para cada elemento do array. É um substituto direto do for quando você só quer "fazer algo" com cada item, como imprimi-lo na tela.

//Analogia: Pense em um carteiro que passa em cada casa (elemento) da rua (array) para entregar uma carta (executar a função). Ele não cria uma nova rua, ele apenas faz uma ação em cada casa.

//Retorno: Ele não retorna nada (undefined).

//Exemplo:

const hq = ["MARVEL", "DC"]

const herois = [
    {nome: "Batman", poder: "Dinheiro", classe: "Heroe", hq: "DC"},
    {nome: "Flash", poder: "Velocidade", classe: "Heroe", hq: "DC"},
    {nome: "Aquaman", poder: "Agua", classe: "Heroe", hq: "DC"},
    {nome: "homem aranha", poder: "Aranha", classe: "Heroe", hq: "Marvel"},
]

console.log(" ---- Usando forEach para saudar os herois ----")
herois.forEach(herois => {
    console.log(`Ola ${herois.nome}, o poder de ${herois.poder} te pertence!`);
})