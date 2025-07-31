//function: A palavra-chave que diz ao JavaScript: "Ei, estou definindo uma função".
// nomeDaFuncao: O nome que você dá à sua "caixa de código".
// () -> Parênteses: Os parênteses sinalizam o inicio e o fim da funcao.
// {} -> Chaves: As chaves sinalizam o inicio e o fim do corpo da funcao.

/**
Parâmetros (Os Ingredientes): São as informações que você passa para dentro
da função para que ela possa trabalhar. Pense numa função somar(a, b). 
Os parâmetros a e b são os números que queremos somar. 
Eles são como as variáveis de entrada da nossa receita.

return (O Prato Final): É a palavra-chave que diz à função para devolver um valor para quem a chamou. 
Uma função pode fazer muitas coisas, 
mas o return define qual é o resultado final. 
Depois que um return é executado, a função para imediatamente.
 */

// --- 1. Função Simples: Apenas executa uma ação ---
// Define a receita "saudacao".
function saudacao() {
  console.log("Olá, aluno! Bem-vindo ao Módulo 4.");
}

// "Chama" ou "invoca" a função para executá-la.
console.log("Chamando a primeira função:");
saudacao(); // Saída: Olá, aluno! Bem-vindo ao Módulo 4.


// --- 2. Função com Parâmetros: Uma receita que aceita ingredientes ---
// O parâmetro 'nome' é um ingrediente que a função espera receber.
function saudacaoPersonalizada(nome) {
  console.log(`Olá, ${nome}! É um prazer ter você aqui.`);
}

console.log("\nChamando a função com parâmetros:");
saudacaoPersonalizada("Maria"); // Saída: Olá, Maria! É um prazer ter você aqui.
saudacaoPersonalizada("João");  // Podemos reutilizá-la com diferentes "ingredientes".


// --- 3. Função com Parâmetros e Retorno: A receita que entrega um prato pronto ---
// Esta função recebe dois números, calcula a soma e a RETORNA.
function somar(num1, num2) {
  const resultado = num1 + num2;
  return resultado; // Devolve o valor calculado.
}

console.log("\nChamando a função com retorno:");
// Chamamos a função e guardamos o "prato final" (o valor retornado) em uma variável.
const resultadoDaSoma = somar(10, 25);
console.log(`O resultado da soma é: ${resultadoDaSoma}`); // Saída: O resultado da soma é: 35

// Podemos usar o retorno diretamente em outro lugar.
console.log(`A soma de 50 + 50 é: ${somar(50, 50)}`); // Saída: A soma de 50 + 50 é: 100