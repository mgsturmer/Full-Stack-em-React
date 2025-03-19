function funcao1(){
    console.log(this)
}

const funcao2 = () => {
    //Executa o código aqui dentro, é uma funão anonima
    //Chamamos ela pela variável.
    console.log(this)   
}

const matsie = {
    nome: "Matheus",
    funcao1,
    funcao2
}

//Aqui printou reconhecendo o contexto - o This foi entendido
matsie.funcao1()

//Aqui o This não foi entendido
matsie.funcao2()
