//Controle de Fluxo e Condicionais

const prompt = require('readline-sync');

const idade = Number(prompt.question('Qual é a sua idade?'));

// Estrutura condicional if/else

if(idade > 18) {
    console.log('Você é maior de idade');
} else if(idade == 18) {
    console.log('Você tem exatamente 18 anos.');
} else {
    console.log('Você é menor de idade');
}

//como usar switch case

const grauDeEstudante = 'b';


switch(grauDeEstudante){
    case 's': 
        console.log('você é incrivel');
        break;
    case 'a':
        console.log('você é bom');
        break;
    case 'b':
        console.log('você é mais ou menos');
        break;
    case 'c':
        console.log('você é ruim');
        break;
    default: 
        console.log('Não sei como você é');
        break;
}

// Operador ternário
// Da pra botar um dentro do outro
// Mas vira bagunça

idade >= 18 ? console.log('faça algo do if') : console.log('faça algo do else')