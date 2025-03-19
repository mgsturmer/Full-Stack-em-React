class Pessoa{
    nome;
    idade;
    profissao;
    
    descrever(){
        console.log(`Meu nome é ${this.nome} e minha idade é ${this.idade}`);
    }
}

const Matheus = new Pessoa();
Matheus.nome = 'Matheus G. Sturmer';
Matheus.idade = 32;

Matheus.descrever();

// Mesmo exeplo com construtor
class Aluno{
    nome;
    idade;
    anoDeNascimento;

    constructor(nome, idade){
        this.nome = nome;
        this.idade = idade;
        this.anoDeNascimento = 2025 - idade;
    }
    descrever(){
        console.log(`Meu nome é ${this.nome} e minha idade é ${this.idade}`);
    }
}

const matheusEstudante = new Aluno("Matheus G. Sturmer", 32);

console.log(matheusEstudante)

