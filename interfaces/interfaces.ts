interface Humano {
    nome: string;
    idade?: number; // O '?' indica que 'Humano' pode ter um atributo 'idade'
    [prop: string]: any; // Indica que 'Humano' pode receber atributos dinamicamente.
}

function dizerOla(pessoa: Humano) {
    console.log(`Olá, ${pessoa.nome}! Idade: ${pessoa.idade}; Possui CNH: ${pessoa.cnh}`);
}

function mudarNome(pessoa: Humano) {
    pessoa.nome = 'Lucas';
}

const pessoa = {
    nome: 'Alberto',
    idade: 32
}

dizerOla(pessoa);
mudarNome(pessoa);
dizerOla(pessoa);
dizerOla({nome: 'Jonas', idade: 27, cnh: true, alto:true})