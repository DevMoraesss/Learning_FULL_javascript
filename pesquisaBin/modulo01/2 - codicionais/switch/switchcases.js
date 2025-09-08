console.log("Missão 04: O Olho de Agamotto");
console.log("-------------------------------");

const joiaEncontrada = "Mente"; // poder, tempo, espaco, realidade, mente, alma

console.log("Joia do Infinito detectada: " + joiaEncontrada);
console.log("Analisando qual Vingador é o mais adequado...");

switch (joiaEncontrada) {
    case "Espaço": // No caso do valor ser EXATAMENTE "Espaço"
        console.log("Vingador Adequado: Capitã Marvel. Ela domina o espaço!");
        break; // Para a execução aqui.

    case "Mente": // No caso do valor ser "Mente"
        console.log("Vingador Adequado: Wanda Maximoff (Feiticeira Escarlate). Seu poder vem da Joia da Mente.");
        break;

    case "Realidade":
        console.log("Vingador Adequado: Thor. Ele já lidou com a realidade sendo alterada pelo Éter.");
        break;

    case "Poder":
        console.log("Vingador Adequado: Hulk. Poder bruto contra poder bruto!");
        break;
        
    case "Tempo":
        console.log("Vingador Adequado: Doutor Estranho. O guardião do Olho de Agamotto.");
        break;

    default: // Se NENHUM dos casos acima corresponder
        console.log("Joia desconhecida. Enviar Homem de Ferro para analisar a anomalia.");
        // O último item (default) não precisa de 'break', mas é uma boa prática colocar mesmo assim.
        break; 
}


// desafio

const corDaJoia = "Vermelha";

switch (corDaJoia) {
    case "Vermelha":
        console.log("Poder: Realidade");
        break;

    case "Azul":
        console.log("Poder: Espaço");
        break;

    case "Amarela":
        console.log("Poder: Mente");
        break;

    case "Verde":
        console.log("Poder: Tempo");
        break;

    case "Roxa":
        console.log("Poder: Poder");
        break;

    case "Branca":
        console.log("Poder: Alma");    
        break;

    default:
        console.log("Joia desconhecida! Cuidado, pode ser perigoso.");
        break;
}
