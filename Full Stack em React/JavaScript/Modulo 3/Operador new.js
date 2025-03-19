function Pessoa(nome, idade){
    this.nome = nome;
    this.idade = idade;
}

Pessoa.prototype.falar = function(){
    console.log(`Meu nome é ${this.nome}`)
}

console.log(new Pessoa('renan',30))

const matheus = {
    genero: 'masculino'
}

Pessoa.call(matheus, 'Matheus', 30)

console.log(matheus)

//Extendendo as strings com método novo.
//Cuidado, pode dar problema nos metoods de string!
String.prototype.toPLang = function(){
    return `P ${this}`
}

console.log('teste'.toPLang());



