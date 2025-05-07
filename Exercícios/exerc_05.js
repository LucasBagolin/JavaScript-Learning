//  5. Escreva um programa que calcula o Índice de Massa Corporal (IMC) de uma pessoa e
// determina a categoria de peso (baixo peso, peso normal, sobrepeso, obesidade) utilizando if-else.

const prompt = require('prompt-sync')();

console.log("Cálculo de IMC");

const peso = parseFloat(prompt("Informe seu peso em kg: "));
const altura = parseFloat(prompt("Informe sua altura em metros: "));

const imc = peso / (altura * altura);

console.log("Seu IMC é: ");
console.log(imc.toFixed(2));

if (imc < 18.5) {
    console.log("Categoria: Baixo peso");
} else if (imc < 25) {
    console.log("Categoria: Peso normal");
} else if (imc < 30) {
    console.log("Categoria: Sobrepeso");
} else {
    console.log("Categoria: Obesidade");
}