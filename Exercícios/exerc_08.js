// 8. Escreva um algoritmo para ler 2 valores (considere que não serão lidos valores iguais)
// e escreve-los em ordem crescente.

const prompt = require('prompt-sync')();

let val1 = parseFloat(prompt("Digite um valor: "));
let val2 = parseFloat(prompt("Digite outro valor: "));

if (val1 == val2){
    console.log("Os valores não podem ser iguais, tente novamente")
} else if (val1 < val2){
    console.log(val1, val2)
} else if (val1 > val2){
    console.log(val2, val1)
}