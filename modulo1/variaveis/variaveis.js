var primeiraVariavel = "var - é uma variavel global, ou seja, pode ser usada em qualquer lugar do codigo";
console.log(primeiraVariavel);


let segundaVariavel = "let - é uma variavel local, ou seja, pode ser usada apenas dentro de um bloco de codigo";
console.log(segundaVariavel);


const terceiraVariavel = "const - é uma variavel constante, ou seja, nao pode ser alterada";
console.log(terceiraVariavel);


// typeof é uma funcao que retorna o tipo da variavel
console.log(typeof primeiraVariavel);

/*
Casos Reais (Aplicação no Mercado)
Instagram: Ao carregar seu perfil, seu nome de usuário é provavelmente guardado numa const 
(const username = '@meu_user';), pois ele não muda naquela tela. 

Já o número de seguidores é guardado num let (let followerCount = 5000;), 
porque ele pode aumentar se alguém te seguir enquanto você está com a página aberta.

E-commerce: O ID de um pedido, depois de gerado, é uma const. O status do pedido 
('processando', 'enviado', 'entregue') é um let.
*/