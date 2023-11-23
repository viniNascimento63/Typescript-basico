"use strict";
function dizerOla(pessoa) {
    console.log(`Olá, ${pessoa.nome}! Idade: ${pessoa.idade}; Possui CNH: ${pessoa.cnh}`);
}
function mudarNome(pessoa) {
    pessoa.nome = 'Lucas';
}
const pessoa = {
    nome: 'Alberto',
    idade: 32
};
dizerOla(pessoa);
mudarNome(pessoa);
dizerOla(pessoa);
dizerOla({ nome: 'Jonas', idade: 27, cnh: true, alto: true });
