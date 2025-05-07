// 14. Crie um programa que calcula o fatorial de um número fornecido pelo usuário utilizando um loop for ou while.

const prompt = require('prompt-sync')();

let numero = parseFloat(prompt('Digite um número inteiro positivo:'));

if(numero < 0){
    console.log("Número invalido");
    return;
}

let fatorial = 1;
let i = numero;

while (i > 1) {
  fatorial *= i;
  i--;
}

console.log("O fatorial do numero é:", fatorial);