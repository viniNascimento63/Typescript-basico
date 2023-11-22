interface Humano {
    nome: string;
    idade?: number;
}

function dizerOla(pessoa: Humano) {
    console.log(`Olá, ${pessoa.nome}!`);
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