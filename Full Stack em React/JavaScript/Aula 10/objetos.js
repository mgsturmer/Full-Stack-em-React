//a primeira mudança é que um objeto é escrito por chaves

const pessoa = {
    nome: "Matheus", 
    idade: 32,
    hobbies: ["Jogar Dota", "Academia", "Programar"],
    //pode botar arrow function dentro do objeto
    funcao: (num1, num2) => num1 + num2
    }

console.log(pessoa.nome);