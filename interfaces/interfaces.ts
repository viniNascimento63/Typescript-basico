interface Humano {
    nome: string;
    idade?: number; // Atributo opcional
    [prop: string]: any; // Atributo dinâmico
    saudar?(sobrenome: string): void; // Método opcional
}

function dizerOla(pessoa: Humano) {
    console.log(`Olá, ${pessoa.nome}! Idade: ${pessoa.idade}; Possui CNH: ${pessoa.cnh}`);
}

function mudarNome(pessoa: Humano) {
    pessoa.nome = 'Lucas';
}

const pessoa: Humano = {
    nome: 'Alberto',
    idade: 32,
    saudar(sobrenome: string) {
        console.log(`Olá, meu nome é ${this.nome} ${sobrenome}`)
    }
}

dizerOla(pessoa);
mudarNome(pessoa);
dizerOla(pessoa);
// dizerOla({nome: 'Jonas', idade: 27, cnh: true, alto:true})
// pessoa.saudar('Skywalker');

// Usando Classes...
class Cliente implements Humano {
    nome: string = '';
    ultimaCompra: Date = new Date(); // Mesmo adicionando mais um atributo, a interface continua sendo respeitada
    saudar(sobrenome: string): void {
        console.log(`Olá, meu nome é ${this.nome} ${sobrenome}`)
    }
}

const cliente = new Cliente();
cliente.nome = 'Ryan';
cliente.saudar('Skywalker');
console.log(cliente.ultimaCompra);

// Interface Função
interface FuncaoCalculo {
    (a: number, b: number): number; // Assinatura de uma função que implementa a interface
}

let potencia: FuncaoCalculo;
potencia = function(base: number, expoente: number): number {
    return base**expoente;
}

console.log(potencia(2, 2));