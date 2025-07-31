const all = ["A", 10, "ola gay", 1.5, true];

console.log(all[0]);

// atribuido valores 
all[0] = "B";
console.log(all);

// usando push para adicionar valores
all.push(22);
console.log(all); 

//adicionando no inicio
all.unshift("voce é linda - giovanna bueno dalbem");
console.log(all);

// como remover o ultimo elemento
//all.pop();
//console.log(all);
// ^
// |
// pode ser como esta acima

// mas pode ser assim
const removed = all.pop();
console.log(all);
console.log(removed);

//remover no inicio
const removed2 = all.shift();
console.log(all);
console.log(removed2);

// qual é o indice do elemento
const index = all.indexOf("ola gay");
console.log(index);

// verificar se um elemento existe
//const exists = all.includes("ola gay");
//console.log(exists);

// transformar um array em string
//const string = all.toString();
//console.log(string);

// transformar um array em um objeto
//const object = all.to

// variavel é um vetor ? 
console.log(Array.isArray(all)); // true ou false se for um Array
console.log(Array.isArray(10));