
// string
const name = "Lionel messi";
console.log(name);

// number
const age = 30;
console.log(age);

// boolean
const hasKids = true;
console.log("Representa um de dois valores: true (verdadeiro) ou false (falso). É o interruptor de luz do código. exemplo -> " + hasKids);

// null
const car = null;
console.log("Representa a ausência intencional de valor. É quando você, programador, quer dizer que a caixa está vazia de propósito." + car);

// undefined
let test;
console.log("Uma variável que foi declarada, mas que nunca teve um valor atribuído. A caixa foi criada, mas está vazia por acidente." + test);

// String: para textos
const nomeDoCurso = "JavaScript do Zero ao Profissional";
console.log(typeof nomeDoCurso); // Saída: "string"

// Number: para cálculos matemáticos
let preco = 49.90;
const numeroDeAlunos = 150;
console.log(typeof preco); // Saída: "number"
console.log(typeof numeroDeAlunos); // Saída: "number"

// Boolean: para decisões de verdadeiro/falso
let estaEmPromocao = true;
console.log(typeof estaEmPromocao); // Saída: "boolean"

// Undefined: valor padrão de variáveis declaradas sem valor
let feedbackDoAluno;
console.log(feedbackDoAluno); // Saída: undefined
console.log(typeof feedbackDoAluno); // Saída: "undefined"

// Null: ausência intencional de valor
let cupomDeDesconto = null;
console.log(cupomDeDesconto); // Saída: null
console.log(typeof cupomDeDesconto); // Saída: "object" (Isso é um bug histórico do JS, mas o valor é null!)
