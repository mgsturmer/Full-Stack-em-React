const pessoa = {
    nome: 'Matheus',
    idade: 32
}

function funcao1(){
    console.log(`${this.nome}`);
}

funcao1()//Essa é a invocação direta! (sem contexto)

funcao1.apply(pessoa) //Aqui com contexto, o this funciona