const prompt = require('readline-sync');


const media = Number(prompt.question('Qual é a media do aluno?'));

if(media < 5) {
    console.log('Reprovado');
} else if(media >= 5 && media < 7) {
    console.log('Recuperação');
} else if(media > 7){
    console.log('Aprovado');
}else {
    console.log('Insira um valor de media valido.')
}