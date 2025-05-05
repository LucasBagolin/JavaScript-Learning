//1. Escreva um programa que recebe um número inteiro e verifica 
//se ele é par ou ímpar utilizando uma estrutura de controle if.

const prompt = require('prompt-sync')()

let numero = Number(prompt('Digite um número inteiro: '))

if (numero % 2 == 0){
    console.log("O número informado é par")
} else if (numero % 2 == 1){
    console.log("O número informado é impar")
} else {
    console.log("Erro, não foi informado um número inteiro")
}