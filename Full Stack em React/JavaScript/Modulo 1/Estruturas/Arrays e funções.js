const nota1 = 10;
const nota2 = 8;
const nota3 = 6;

//Podemos substituir por Array

const notasDoAluno = [];
notasDoAluno.push(10);
notasDoAluno.push(5);
notasDoAluno.push(8);


//suportando diferentes tipos

const pessoa = ['Matheus', 31, 1,78, 95];
console.log(notasDoAluno);
console.log(pessoa);
console.log(pessoa[0])

console.log(pessoa.slice(0,2));

//Adicionando elementos no fim
pessoa.push("Dev");
console.log(pessoa);

//Adicionando elementos no início
pessoa.unshift("Dev");
console.log(pessoa);

//Remove o último elemento
pessoa.pop()
console.log(pessoa);

//Shift remove o primeiro elemento

pessoa.shift();
console.log(pessoa);

//includes - booleado de inclui algo
console.log(pessoa.includes('Matheus'));

// Index of e last index of
// Pegfa primeiro e ultimo elemento que tem algum valor
// Pesquisa no array

