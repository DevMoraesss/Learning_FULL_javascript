/**
Regra 2: Chamada de Função Simples
Quando uma função é chamada diretamente, sem ser um método de objeto (minhaFuncao()), 
o this assume um valor padrão.

Em "modo não-estrito" (não recomendado): this aponta para o objeto global (window no navegador).

Em "modo estrito" (use sempre!): this é undefined.
 */

"use strict";

function quemSouEu() {
  console.log(this);
}

quemSouEu();