/*
* No TS, o tipo de uma variável é inferido
* na sua inicialização.
*/

// string
let nome = 'Pedro';
console.log(nome);

// numbers
let idade = 17;
console.log(idade);
idade = 17.3;
console.log(idade);

// boolean
let possuiHobbies = true;
console.log(possuiHobbies);

// Tipos explícitos
let minhaIdade: any;
minhaIdade = 22;
console.log(typeof(minhaIdade));

// Arrays
let hobbies: any[] = ['Esportes', 'Música', 'Leitura'];
console.log(hobbies[1]);
hobbies[3] = 34;
console.log(hobbies);

// Tuplas 
let endereco: [string, number, string] = ["Rua banana", 342, ""];
console.log(endereco);
endereco = ["Rua Limão", 984, "Abacaxi B1"];
console.log(endereco);

// enums
enum Cor {
    Azul,             // 0
    Vermelho = 100,   // 100
    Roxo = 10,        // 10
    Laranja,          // 11
    Amarelo = 100     // 100
}
let minhaCor: Cor = Cor.Azul;
console.log(minhaCor);
console.log(Cor.Vermelho);
console.log(Cor.Amarelo, Cor.Vermelho);
console.log(Cor.Roxo, Cor.Laranja);

// any
let carro: any = "BMW";
console.log(carro);
carro = {Marca: "Mercêdes-Bens", Ano: 2022};
console.log(carro);
