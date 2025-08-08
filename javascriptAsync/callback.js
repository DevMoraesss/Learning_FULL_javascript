function buscarUser (id, callback) {
    console.log("Buscando...");

    // setTimeout simula uma operação de rede que leva 2 seg
    setTimeout(() => {
        const user = {
            id: id,
            name: "Lionel Messi",
            age: 35,
        };
        console.log("Usuario encontrado:", user);
        // quando terminar, Chamamos o callback como um resultado
        callback(user);
    }, 2000);  // 2000ms = 2seg
}

// ------- COMO USAMOS A FUNÇÃO -------

console.log("Inicio do código.");

//Chamamos a função e passamos a outra funcao como callback
buscarUser(1, (usuarioEncontrado) => {
console.log("Callback executado!");
console.log(`O nome do melhor do mundo é ${usuarioEncontrado.name} idade -> ${usuarioEncontrado.age}.`);
});

console.log("Fim do código.");