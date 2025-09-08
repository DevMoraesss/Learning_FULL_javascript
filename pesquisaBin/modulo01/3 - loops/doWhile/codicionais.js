console.log("Missão 02: O Sentido Aranha");
console.log("--------------------------");

const heroi = "Homem Aranha";
let poder = 750;

const vilao = "Venom";
let poderDoVilao = 800;

console.log(heroi + " VS " + vilao);
console.log("Analisando a batalha...");

if (poder > poderDoVilao) {
    console.log(heroi + " VENCEU!");
} else {
    console.log(vilao + " VENCEU!");
}

// desafio

let nivelDeAmeaca = 8; // pode ir de 1 a 10

if (nivelDeAmeaca > 7) {
    console.log("Ameaça alta! Chamar reforços dos Vingadores!");
} else {
    console.log("Ameaça baixa. O Homem-Aranha dá conta do recado sozinho.");
}


// usando else if

console.log("Missão 03: A Manopla do Infinito");
console.log("----------------------------------");

nivelDeAmeaca = 6

console.log("Nível de ameaça atual: " + nivelDeAmeaca);
console.log("Analisando protocolo de resposta...");

if (nivelDeAmeaca <= 3) {
    console.log("Protocolo: Ameaça de nível BAIXO. Enviar agentes locais.");
} else if (nivelDeAmeaca <= 7) {
    console.log("Protocolo: Ameaça de nível MÉDIO. O Homem-Aranha foi notificado.");
} else {
    console.log("Protocolo: Ameaça de nível ALTO. Alerta Vermelho! Chamar os Vingadores IMEDIATAMENTE!");
}

// usando string

const nomeVilao = "Loki";
console.log("Vilao detectado: " + nomeVilao);

if (nomeVilao == "Duende Verde") {
    console.log("Ação: Chamar o Homem-Aranha.");
} else if(nomeVilao === 'Loki' || nomeVilao === 'Thanos') {
    console.log("Ação: Chamar TODOS os Vingadores.");
} else {
    console.log("Ação: Vilão desconhecido. Enviar um drone para análise.");
}

// desafio 2

let nivelDeAcesso = 5;

if ( nivelDeAcesso >= 7) {
    console.log("Acesso permitido.");
} else if (nivelDeAcesso >= 5) {
    console.log("Acesso permitido com restrição.");
} else {
    console.log("Acesso negado.");
}