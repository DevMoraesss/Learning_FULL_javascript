const vingadores = ["Homem de Ferro", "Capitão America", "Thor", "Hulk"];

console.log("A equipe dos Vingadores tem " + vingadores.length + " membros.");
console.log("Iniciando a chamada...");

for (let i = 0; i < vingadores.length; i++) {
    // A cada volta do loop, 'i' terá um valor diferente (0, 1, 2, ...)
    // Usamos 'i' como o índice para pegar o herói daquela posição.
    const heroiDaVez = vingadores[i];
    console.log("Chamando: " + heroiDaVez);
}

console.log("Chamada concluida.");