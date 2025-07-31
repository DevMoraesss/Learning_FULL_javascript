// Criando nosso primeiro objeto para representar um usuário.
// Note como os valores podem ser de tipos diferentes.
const usuario = {
  nome: "Ana Silva",
  email: "ana.silva@email.com",
  idade: 29,
  estaAtivo: true,
  interesses: ["corrida", "culinária", "tecnologia"],
  endereco: { // Sim, um objeto pode ter outro objeto dentro!
    cidade: "São Paulo",
    estado: "SP"
  }
};

// Exibindo o objeto inteiro no console.
console.log("Ficha completa do usuário:");
console.log(usuario);

// --- Lendo dados do objeto ---
console.log("\n--- Acessando dados ---");

// Usando notação de ponto
console.log("Nome:", usuario.nome); // Saída: Nome: Ana Silva
console.log("Idade:", usuario.idade); // Saída: Idade: 29
console.log("Primeiro interesse:", usuario.interesses[0]); // Acessando um item do array dentro do objeto
console.log("Cidade:", usuario.endereco.cidade); // Acessando uma propriedade do objeto aninhado

// Usando notação de colchetes
console.log("Email:", usuario['email']); // Saída: Email: ana.silva@email.com


// --- Modificando e adicionando dados ---
console.log("\n--- Modificando dados ---");
console.log("Status de ativo antes:", usuario.estaAtivo);

// Modificando um valor existente
usuario.estaAtivo = false;
console.log("Status de ativo depois:", usuario.estaAtivo);

// Adicionando uma nova propriedade que não existia
usuario.telefone = "11 99999-8888";
console.log("Telefone adicionado:", usuario.telefone);

console.log("\nFicha final atualizada:");
console.log(usuario);