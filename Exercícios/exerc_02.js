//2. Crie um programa que classifica a idade de uma pessoa em categorias 
// (criança, adolescente, adulto, idoso) com base no valor fornecido, 
// utilizando uma estrutura de controle if-else.

const prompt = require('prompt-sync')()

let idade = Number(prompt('Digite a sua idade: '))

if (idade >= 0 && idade < 12){
    console.log("Categoria: Criança")
} else if (idade >= 12 && idade < 18){
    console.log("Categoria: Adolescente")
} else if (idade >= 18 && idade < 60){
    console.log("Categoria: Adulto")
} else if (idade >= 60){
    console.log("Categoria: Idoso")
} else {
    console.log("Erro, não foi informada uma idade corretamente")
}