//importando a biblioteca
//vamos ter que utilizar com question

const prompt = require('readline-sync');

const idade = prompt.question("Qual é a sua idade?");

const idadeNumero = Number(idade);

console.log(idade, typeof idade, idadeNumero, typeof idadeNumero);
//brabo