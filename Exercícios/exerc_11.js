// 11. Escreva um programa que solicita ao usuário 5 números e calcula a soma total utilizando um loop for.

const prompt = require('prompt-sync')();

let i;
let acumulador = 0;
let num = 0;

for(i = 0; i < 5; i++){
    num = parseFloat(prompt('Digite um número: '))
    acumulador = num + acumulador;
}

console.log("O valor somado foi de:", acumulador);