// IMPLEMENTANDO DRY
// Dont Repeat Yourself
// não vamos repetir código, vira função que
// resolve 1 e unico problema.

/*
function saudacao(nomeDoEstudante){
    console.log("Olá &{nomeDoEstudante}!, seja bem vindo ao curso de front-end em React");
    console.log("Seja bem vindo ao curso de front-end em React");
}
*/// A Variável escopada nomeDoEstudante só existe dentro da função.

//funções também seguem camel case
console.clear();

function saudacaoAoAluno(nomeDoEstudante, curso){
    return ('Olá, ${nomeDoEstudante}!, seja bem vindo ao curso de ${curso}');
}

//saudacao("Matheus")

console.log(saudacaoAoAluno("Matheuzinho",'Front-end em React'));


// ARROW FUNCTIONS
console.clear();

const subtrair = (num1, nume2) => {
    return nume1 - num2
}
// tbm pdoe ser escrito como
const multiplicar = (num1, nume2) => nume1*num2;

