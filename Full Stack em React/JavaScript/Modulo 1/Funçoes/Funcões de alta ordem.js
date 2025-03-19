//HIGH ORDER FUNCTIONS

// 1. Função que retorna outra função como parametro.

function welcome(courseName) {
    return (studentName) => {
        console.log(
            `Olá, ${studentName}! Seja bem vindo ao curso de ${courseName}`
        );
    }
}

console.clear()
const displayWelcomeToCourse = welcome("Front-End em React");

displayWelcomeToCourse("Matheus");


console.clear()

// 2. Função que recebe outra função como parametro

const somar = (num1, num2) => num1 + num2;
const subtrair = (num1, num2) => num1 - num2;
const multiplicar = (num1, num2) => num1 * num2;
const dividir = (num1, num2) => num1 / num2;

const calcular = (num1, num2, operacao) => operacao(num1, num2);

console.log(calcular(5,10,somar));