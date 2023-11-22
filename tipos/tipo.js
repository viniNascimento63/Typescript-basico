"use strict";
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
let minhaIdade;
minhaIdade = 22;
console.log(typeof (minhaIdade));
// Arrays
let hobbies = ['Esportes', 'Música', 'Leitura'];
console.log(hobbies[1]);
hobbies[3] = 34;
console.log(hobbies);
// Tuplas 
let endereco = ["Rua banana", 342, ""];
console.log(endereco);
endereco = ["Rua Limão", 984, "Abacaxi B1"];
console.log(endereco);
// enums
var Cor;
(function (Cor) {
    Cor[Cor["Azul"] = 0] = "Azul";
    Cor[Cor["Vermelho"] = 100] = "Vermelho";
    Cor[Cor["Roxo"] = 10] = "Roxo";
    Cor[Cor["Laranja"] = 11] = "Laranja";
    Cor[Cor["Amarelo"] = 100] = "Amarelo"; // 100
})(Cor || (Cor = {}));
let minhaCor = Cor.Azul;
console.log(minhaCor);
console.log(Cor.Vermelho);
console.log(Cor.Amarelo, Cor.Vermelho);
console.log(Cor.Roxo, Cor.Laranja);
// any
let carro = "BMW";
console.log(carro);
carro = { Marca: "Mercêdes-Bens", Ano: 2022 };
console.log(carro);
