/**
 * Regra 3: Arrow Functions (=>)
Arrow functions são especiais. Elas não têm seu próprio this. 
Elas herdam o this do escopo em que foram criadas (escopo léxico).

Analogia: É como um filho que, ao ser perguntado "quem é o chefe da casa?", 
aponta para o pai (this do escopo pai), em vez de se declarar como o chefe.
 */

const guerreiro = { 
    nome: "Kratos",
    inimigos: ["Ares", "Hades", "Zeus"],
    mostrarInimigos: function() {
        console.log(`${this.nome} mata os inimigos:`);
        this.inimigos.forEach(inimigo => {
            console.log(`${inimigo}`);
        });
    }
};

guerreiro.mostrarInimigos();