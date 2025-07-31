const carro = {
  marca: "Honda",
  modelo: "Civic",
  ano: 2025,
  velocidade: 0,

  // Isto é um MÉTODO. Note a sintaxe mais curta (ES6).
  // É o mesmo que: acelerar: function(valor) { ... }
  acelerar(valor) {
    // `this.velocidade` se refere à propriedade `velocidade` DESTE objeto (`carro`).
    this.velocidade += valor;
    console.log(`Acelerando... Velocidade atual: ${this.velocidade} km/h`);
  },

  frear() {
    this.velocidade = 0;
    console.log(`Freando... O carro parou. Velocidade atual: ${this.velocidade} km/h`);
  },
  
  // Usando uma arrow function para mostrar a diferença (cuidado!)
  // Lembre-se: arrow functions HERDAM o `this`. Em um contexto global, `this` pode não ser o que você espera.
  // Por isso, para métodos de objeto, a sintaxe normal é geralmente preferida.
  resumo: function() {
      // this aqui é o objeto `carro`
      return `${this.marca} ${this.modelo} (${this.ano})`;
  }
};

console.log("\n--- Testando métodos do objeto Carro ---");
console.log(carro.resumo());
carro.acelerar(50);
carro.acelerar(30);
carro.frear();