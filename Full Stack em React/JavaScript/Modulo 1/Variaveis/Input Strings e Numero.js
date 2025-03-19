
const prompt = require('readline-sync');
//importando a biblioteca
//vamos ter que utilizar com question

const idade = prompt.question("Qual é a sua idade?");
const idadeNumero = Number(idade);

console.log(idade, typeof idade, idadeNumero, typeof idadeNumero);
//pegou idade como string. passamos para numero com a variavel idadeNumero.