// 4. Crie um menu interativo no console que oferece ao usuário a escolha de três opções.
// Utilize switch-case para implementar a lógica de cada opção selecionada.

const prompt = require('prompt-sync')()

console.log("Qual opção você escolhe?")
console.log("1. Ter amigos fiéis")
console.log("2. Ficar rico")
console.log("3. Encontrar o amor da sua vida")
console.log("0. Sair sem escolher")

const opcao = prompt("Opção escolhida: ")

switch (opcao) {
    case '1':
        console.log("Você entendeu que a riqueza verdadeira está nas conexões sinceras.")
        break
    case '2':
        console.log("Apenas lembre-se: dinheiro compra conforto, mas não garante paz.")
        break
    case '3':
        console.log("Só cuidado para não se perder de si mesmo no caminho.")
        break
    case '0':
        console.log("Às vezes, não decidir também é uma decisão.")
        break
    default:
        console.log("Opção inválida. Tente novamente com algo entre 0 e 3.")
        break
}
