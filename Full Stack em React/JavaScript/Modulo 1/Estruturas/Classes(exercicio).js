class Carro{
    marca;
    cor;
    kmPorLitro;
    
    constructor(marca, cor, kmPorLitro){
        this.marca = marca;
        this.cor = cor;
        this.kmPorLitro = kmPorLitro;
    }
    consumo(kilometros){
        return kilometros/this.kmPorLitro
    }    
    
}

const Kazinho = new Carro("Ford KA", "Branco", 14.0);
kilometrosDaViagem = 140;
console.log(`O carro irá consumir ${Kazinho.consumo(kilometrosDaViagem)} Litros para realizar esta viagem.`)