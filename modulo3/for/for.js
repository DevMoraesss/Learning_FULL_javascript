// o que é o for loop?
// um loop que executa um bloco de codigo um numero determinado de vezes

/*
Inicialização (let i = 0;): "Robô, comece seu trabalho com o primeiro documento,
o primeiro de número 0." 
(Criamos uma variável contadora, geralmente chamada de i de index, e a iniciamos em 0).

Condição (i < tarefas.length;): "Continue carimbando enquanto o número do documento atual
(i) for menor que o número total de documentos na pilha (tarefas.length)." 
(O loop só continua se essa condição for true).

Incremento (i++): "Depois de carimbar cada documento, passe para o próximo."
(i++ é um atalho para i = i + 1. Ele adiciona 1 ao contador ao final de cada repetição).
*/

for (let i = 0; i < 10; i++) {
    console.log(i);
}

// exemplo real
// Vamos usar o mesmo array da aula anterior.
const tarefas = ["Comprar pão", "Estudar JavaScript", "Passear com o cachorro", "Lavar a louça"];

console.log("--- Exibindo tarefas uma por uma com o Loop FOR ---");

//  (1) Comece no índice 0; (2) Continue enquanto i for menor que 4; (3) A cada volta, some 1 ao i.
for (let i = 0; i < tarefas.length; i++) {
  // Na primeira volta, i = 0. Na segunda, i = 1, e assim por diante.
  
  // Pegamos o item do array na posição ATUAL do contador `i`
  const tarefaAtual = tarefas[i];
  
  // Exibimos a tarefa de forma organizada.
  console.log(`Tarefa ${i + 1}: ${tarefaAtual}`);
}

console.log("--- Fim da lista. Robô pode descansar! ---");

// Exemplo com números: somar todos os valores de um array
const notas = [10, 8.5, 7, 9];
let somaDasNotas = 0; // Variável "acumuladora"

for (let i = 0; i < notas.length; i++) {
  somaDasNotas = somaDasNotas + notas[i];
  console.log(`No passo ${i}, a soma parcial é: ${somaDasNotas}`);
}

const media = somaDasNotas / notas.length;
console.log(`A média final das notas é: ${media}`);