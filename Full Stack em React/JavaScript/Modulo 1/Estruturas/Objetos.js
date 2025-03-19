//a primeira mudança é que um objeto é escrito por chaves

const pessoa = {
    nome: "Matheus", 
    idade: 32,
    hobbies: ["Jogar Dota", "Academia", "Programar", "Jogar Xadrez"],
    //pode botar arrow function dentro do objeto
    funcao: (num1, num2) => num1 + num2
    }

console.log(pessoa.nome);
console.log(pessoa.idade);
console.log(pessoa.hobbies);
console.log(pessoa.hobbies[1]);