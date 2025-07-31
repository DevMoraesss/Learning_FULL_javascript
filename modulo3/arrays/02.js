// Criando um array (uma lista) de tarefas
const tarefas = ["Comprar pão", "Estudar JavaScript", "Passear com o cachorro"];

console.log("Minha lista de tarefas completa:");
console.log(tarefas); // Saída: [ 'Comprar pão', 'Estudar JavaScript', 'Passear com o cachorro' ]

// Acessando o PRIMEIRO item da lista (índice 0)
const primeiraTarefa = tarefas[0];
console.log("Minha primeira prioridade é:", primeiraTarefa); // Saída: Minha primeira prioridade é: Comprar pão

// Acessando o TERCEIRO item da lista (índice 2)
const terceiraTarefa = tarefas[2];
console.log("A última tarefa de hoje é:", terceiraTarefa); // Saída: A última tarefa de hoje é: Passear com o cachorro

// Verificando quantos itens temos na lista
const totalDeTarefas = tarefas.length;
console.log(`Eu tenho um total de ${totalDeTarefas} tarefas para fazer.`); // Saída: Eu tenho um total de 3 tarefas para fazer.

// Dica de profissional: como acessar o ÚLTIMO item de qualquer array?
const ultimaTarefa = tarefas[tarefas.length - 1];
console.log("Acessando a última tarefa de forma dinâmica:", ultimaTarefa);