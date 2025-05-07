//  7. As maçãs custam R$ 0,30 se forem compradas menos do que uma dúzia, e R$0,25 se
// forem compradas pelo menos doze. Escreva um algoritmo que leia o número de maçãs
// compradas, calcule e escreva o valor total da compra.

const prompt = require('prompt-sync')();

let val1 = parseFloat(prompt("Quantas maças você comprou? "));
let calcula = 0;

if (val1 < 12){
    calcula = val1 * 0.3;
} else {
    calcula = val1 * 0.25;
}

console.log("Valor Total:", calcula);