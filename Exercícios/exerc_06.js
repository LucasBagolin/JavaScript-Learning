// 6. Ler três valores para os lados de um triângulo: A, B e C. Verificar se os lados fornecidos
// formam realmente um triângulo. Caso forme, deve ser indicado o tipo de triângulo: Isósceles, escaleno ou eqüilátero.

const prompt = require('prompt-sync')();

console.log("Digite três valores: ");

let val1 = parseFloat(prompt("Informe o primeiro valor: "));
let val2 = parseFloat(prompt("Informe o segundo valor: "));
let val3 = parseFloat(prompt("Informe o terceiro valor: "));

if ((val1 + val2) < val3) {
    console.log("Não foi possível formar um triângulo com os lados informados");
} else if (val1 == val2 && val1 == val3) {
    console.log("Triângulo Equilátero");
} else if (val1 == val2 || val1 == val3 || val2 == val3) {
    console.log("Triângulo Isósceles");
} else if (val1 != val2 && val1 != val3 && val2 != val3){
    console.log("Triângulo Escaleno");
} else {
    console.log("Valores inválidos, tente novamente");
}