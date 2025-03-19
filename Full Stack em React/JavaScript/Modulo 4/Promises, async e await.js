const promessaDeUmNumero = new Promise((resolve, reject) => {
    setTimeout(() => {
        const numero = parseInt(Math.random() * 100)
        resolve(numero)
    }, 1000)
})

console.log("Vai Filhão!")

promessaDeUmNumero
    .then((value) => {
        console.log(value)
    })
    .catch((error) => {
        console.log("Deu ruim")
    })
    .finally(() => {
        console.log("Finalizou direitinho.")
    })