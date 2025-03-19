// Os Tipos de dados são os seguintes:
/* 
|   boolean
|   null
|   undefined
|   number
|   string
|   symbol
|   object
*/
//+infinity e -infinity e NaN são vistos como numero.

//para representar texto temos 3 formas:
var1 = "Texto"

//Se usar aspas simples, podemos utilizar aspas duplas no texto:
var2 = '<div id="texto"> Este é um texto </div>'
//Este é outro texto mas adicionando uma variavel no html:
var2 = '<div id="texto">'+var2+'</div>'
console.log(var2);
//Com template literals da pra usar ${variavel}
var3 = `Texto em template literals`

const eu = {
    nome: "Matheus Gabriel Sturmer",
    idade: 32,
    carreira: "Desenvolvedor Full Stack",
    falar: function(){
        console.log(`Meu nome é ${this.nome} e eu tenho ${this.idade} anos.`)
    }
};

console.log(typeof(eu));
console.log(eu.nome);

const y = eu.falar;

eu.falar();
y()