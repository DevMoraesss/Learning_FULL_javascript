/**
Regra #1: A Troca Básica
A palavra function some e uma "flecha" => aparece depois dos parênteses.

De: function (a, b) { ... }

Para: (a, b) => { ... }

Regra #2: Parênteses Opcionais (Apenas para UM parâmetro)
Se sua função tem exatamente um parâmetro, 
os parênteses em volta dele são opcionais.

De: (nome) => { ... }

Para: nome => { ... } (Mais limpo!)

Atenção: Se não houver parâmetros ou se houver mais de um, os parênteses são obrigatórios: () => { ... } ou (a, b) => { ... }.

Regra #3: Retorno Implícito (A Grande Vantagem)
Se o corpo da sua função tem apenas uma linha e essa linha é o return, você pode remover as chaves {} e a palavra return. O valor será retornado automaticamente.

De:


const somar = (a, b) => {
  return a + b;
};
Para:

JavaScript

const somar = (a, b) => a + b; // Lindo, não?
Vamos aplicar isso ao nosso primeiro exemplo do .map():

De: nomes.map(function(nome) { return nome.toUpperCase(); });

Para: nomes.map(nome => nome.toUpperCase());

Percebe como o código fica drasticamente mais limpo e legível?

Regra #4: Retornando um Objeto (A Pegadinha!)
E se você quiser retornar um objeto literal em uma única linha?

Errado: () => { nome: "Professor" }

O JavaScript vai confundir as chaves {} do objeto com as chaves do corpo da função, resultando em um erro.

Certo: () => ({ nome: "Professor" })

Você "envelopa" o objeto em parênteses () para dizer ao JavaScript: "Ei, estas chaves não são do corpo da função, são de um objeto que eu quero retornar".
 */