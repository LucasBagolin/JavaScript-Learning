// 3. Implemente um programa que recebe uma nota de 0 a 10 e classifica como
// "Aprovado", "Recuperação", ou "Reprovado" utilizando if-else if.

const prompt = require('prompt-sync')()

let nota = Number(prompt('Digite a sua nota: '))

if (nota >= 0 && nota < 6){
    console.log("Recuperação")
    let nota_recuperação = Number(prompt("Nota na recuperação: "))
    if (nota_recuperação >= 0 && nota_recuperação < 6){
        console.log("Reprovado")
    } else if (nota_recuperação >= 6 && nota_recuperação <= 10){
        console.log("Aprovado na recuperação")
    } else {
        console.log("Erro, não foi informada uma nota corretamente")
        return
    }
} else if (nota >= 6 && nota <= 10){
    console.log("Aprovado")
} else {
    console.log("Erro, não foi informada uma nota corretamente")
}