/*Orientação a protótipo:
| é a maneira como fazer herança no JS
| como se fosse uma base
*/

const homem = {
    genero: "masculino"
}

//o Objeto ->eu extende ->homem
const eu = {
    nome: 'Matheus Sturmer',
    idade: 32,
    __proto__: homem
}

console.log(eu.genero);

/*Funções construtoras:
| Tendo o escopo completo da função.
| podemos usar o this.
|
| 
*/

function Pessoa(nome, idade){
    this.nome = nome;
    this.idade = idade
}
// Podemos alterar a função com prototype:
Pessoa.prototype.falar = function(){
    console.log(`Meu nome é: ${this.nome}`)
}

const matheus = new Pessoa('Matheus', 32)
console.log(matheus)

matheus.falar()

// Sobrescrita:

const OutraPessoa = {
    nome: 'Matheus Sturmer',
    idade: 32,
    genero: 'Feminino',
    __proto__: homem
}
//Genero foi reescrito
// A primeira propriedade na cadeia que apareceer vai ser utilziada

console.log(OutraPessoa.genero);