
const prompt = require('readline-sync');

const altura = Number(prompt.question('Qual é a sua altura (em cm)?'));
let peso = Number(prompt.question('Qual é seu peso (em Kg)?'));

let bmi = (peso / (altura * altura)*10000);

/* O fator 10000 é uma correção pois pedi o valor em centimetros.
Ele corrige a multiplicação de 100 * 100 na altura).
*/

console.log('O seu IMC é: ', bmi);