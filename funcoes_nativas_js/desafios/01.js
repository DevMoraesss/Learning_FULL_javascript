const bruxos = [
    {nome: "Harry", casa: "grifinória", raca: "bruxo", idade: 15},
    {nome: "Hermione", casa: "grifinória", raca: "trouxa", idade: 15},
    {nome: "Ron", casa: "grifinória", raca: "bruxo", idade: 15},
    {nome: "Draco", casa: "sonserina", raca: "bruxo", idade: 15},
];

const saudacao = bruxos.forEach(bruxos => {
    console.log(`Ola ${bruxos.nome}, seja bem vindo a ${bruxos.casa}`);
});

const nomes = bruxos.map(bruxos => {
    return bruxos.nome
});

console.log(" ---- Usando map para pegar os nomes dos bruxos ----");
console.log(nomes);

const apenasBruxos = bruxos.filter(bruxos => {
    return bruxos.raca === "bruxo"
});

console.log(" ---- Usando filter para pegar apenas os bruxos ----");
console.log(apenasBruxos);

const mediaIdade = bruxos.reduce((acumulador, bruxos) => {
    return acumulador + bruxos.idade
}, 0);

console.log(" ---- Usando reduce para pegar o poder total ----");
console.log(mediaIdade);