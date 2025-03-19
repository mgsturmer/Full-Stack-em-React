// Criando as listas de modo dinamico
const listaNumeros = Array.from({ length: 10 }, (_, i) => i + 1);
const listaLetras = Array.from({ length: 26 }, (_, i) => String.fromCharCode(65 + i)); // Letras maiúsculas de A a Z

// forEach - Itera sobre elementos
listaNumeros.forEach(num => console.log(`Número: ${num}`));
listaLetras.forEach(letra => console.log(`Letra: ${letra}`));

// 2. filter - Filtrando elementos
const numerosPares = listaNumeros.filter(num => num % 2 === 0);
console.log("Números Pares:", numerosPares);

const letrasVogais = listaLetras.filter(letra => 'AEIOU'.includes(letra));
console.log("Letras Vogais:", letrasVogais);

// 3. map - Aplica uma conversão em todos objetos
const numerosAoQuadrado = listaNumeros.map(num => num ** 2);
console.log("Números ao quadrado:", numerosAoQuadrado);

const letrasMinusculas = listaLetras.map(letra => letra.toLowerCase());
console.log("Letras minúsculas:", letrasMinusculas);

// 4. reduce - Reduzindo a lista a um único valor
const somaNumeros = listaNumeros.reduce((acumulador, num) => acumulador + num, 0);
console.log("Soma dos números:", somaNumeros);

const concatLetras = listaLetras.reduce((acc, letra) => acc + letra, "");
console.log("Letras concatenadas:", concatLetras);

// 5. join - Unindo elementos em uma string
const numerosString = listaNumeros.join(", ");
console.log("Lista de números:", numerosString);

const letrasString = listaLetras.join("-");
console.log("Lista de letras:", letrasString);

// 6. Combinação de funções - Exemplo 1: Filtrar pares e elevar ao quadrado
const paresAoQuadrado = listaNumeros.filter(num => num % 2 === 0).map(num => num ** 2);
console.log("Pares ao quadrado:", paresAoQuadrado);

// 7. Combinação de funções - Exemplo 2: Filtrar consoantes e concatenar
const consoantesConcatenadas = listaLetras.filter(letra => !'AEIOU'.includes(letra)).join(" ");
console.log("Consoantes concatenadas:", consoantesConcatenadas);