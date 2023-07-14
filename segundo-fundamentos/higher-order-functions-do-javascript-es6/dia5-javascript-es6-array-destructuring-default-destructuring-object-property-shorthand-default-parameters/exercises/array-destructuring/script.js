const primeNumbers = [17, 23, 37]

const sum = (a, b) => {
  console.log(a + b);
}

sum(primeNumbers[0], primeNumbers[2]) // 54

console.log('=================================================');

const [firstPrime, secondPrime, thirdPrime] = primeNumbers; // a variável primeNumbers armazena o array [17, 23, 37], logo o primeiro número primo será 17 e assim por diante.

sum(firstPrime, thirdPrime); // 54

console.log('=================================================');

let comida = 'gato';
let animal = 'água';
let bebida = 'arroz';

[comida, animal, bebida] = [bebida, comida, animal];

console.log(comida, animal, bebida);


console.log('=================================================');

let numerosPares = [1, 3, 5, 6, 8, 10, 12];

[,,, ...numerosPares] = numerosPares;

console.log(numerosPares); // [6, 8, 10, 12];

