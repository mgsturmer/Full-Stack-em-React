//First Class Functions e Funções de Alta Ordem.

function falarMeuNome(){
    console.log('Meu nome é Matheus');
}

const referenciarFuncao = falarMeuNome
//Passei função pra variavel e vou chamar variavel.
referenciarFuncao()

//Passando função como argumento
function falarMeuNomeCompleto(falarMeuNome){
    falarMeuNome()
    console.log('Gabriel Sturmer')
}

falarMeuNomeCompleto(falarMeuNome)

//Podemos até retornar funções dentro de funções.

//Declarando função
function nomeDaFuncao(){}

//Atribuindo função a variavel
const nomeDeOutraFuncao = function(){}

//Funciona dos dois modos:
nomeDaFuncao()
nomeDeOutraFuncao()

//A diferença é o Roisting. A declaração da função vai ir pro topo
//Quando atribuimos à variavel só acontece no momento da atribuição
//Não sofre roisting (não pode ser chamada antes.)