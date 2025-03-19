//Revisão sobre declaração de variaveis
//Javascript é case sensitive.
// Escopo Global - utilize var

//Revisão de convenção:
//Variaveis n podem começar com números
//podem começar com underline - significa que são daquele escopo
//Para declarar classe ou função, começamos com letra maiúscula.
//Quando formos declara constante, tudo com letra maiuscula
//Para variáveis compostas utilize camelCase



const Dez = 10;
var var1 = 10;
var var2 = 'Teste';
var dataDeNascimento = '24-08-1992'

// Escopo de Bloco - utilize let
let var3 = 11;
let var4 = '12';

// Da pra juntar as variaveis, a soma de texto + numero ele concatena
// O javascript entende, se botar um negativo da problema.
console.log(var1 + var2);
console.log(var3 - var4)

//Içamento de variavel:
//Ordem de declaração importa!

//Mesmo declarando função depois, ele entende, como se a função 
//Estivesse antes 
teste();

function teste(){
    console.log('Hello World!');
}

teste();