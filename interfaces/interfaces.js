"use strict";
function dizerOla(pessoa) {
    console.log(`Olá, ${pessoa.nome}! Idade: ${pessoa.idade}; Possui CNH: ${pessoa.cnh}`);
}
function mudarNome(pessoa) {
    pessoa.nome = 'Lucas';
}
const pessoa = {
    nome: 'Alberto',
    idade: 32,
    saudar(sobrenome) {
        console.log(`Olá, meu nome é ${this.nome} ${sobrenome}`);
    }
};
dizerOla(pessoa);
mudarNome(pessoa);
dizerOla(pessoa);
// dizerOla({nome: 'Jonas', idade: 27, cnh: true, alto:true})
// pessoa.saudar('Skywalker');
// Usando Classes...
class Cliente {
    constructor() {
        this.nome = '';
        this.ultimaCompra = new Date(); // Mesmo adicionando mais um atributo, a interface continua sendo respeitada
    }
    saudar(sobrenome) {
        console.log(`Olá, meu nome é ${this.nome} ${sobrenome}`);
    }
}
const cliente = new Cliente();
cliente.nome = 'Ryan';
cliente.saudar('Skywalker');
console.log(cliente.ultimaCompra);
