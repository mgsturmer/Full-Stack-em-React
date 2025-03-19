function soma(x){
    return function(y){
        return x+y;
    }
}

z = soma(10)(20)
console.log(z)

//A variavel recebendo a função com o primeiro argumento
var base = soma(10)

//Aqui a variavel que ja tinha um argumento recebe o segundo
console.log(base(10))
console.log(base(20))
console.log(base(-5))

//A função segue intacta para ser chamada novamente com outros valores.