"use strict";
function dizerOla(pessoa) {
    console.log(`Olá, ${pessoa.nome}!`);
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
