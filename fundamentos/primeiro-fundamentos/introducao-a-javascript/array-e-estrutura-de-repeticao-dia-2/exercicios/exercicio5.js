const numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

for (let index = 0; index < numbers.length; index += 1) {
  console.log(numbers[index]);
};


let result = 0;

for (let index = 0; index < numbers.length; index += 1) {
  result += numbers[index];
};

console.log(result);

let sum = 0;

for (let index = 0; index < numbers.length; index += 1) {
  sum += numbers[index];
};

let average = sum / numbers.length;

console.log(average);

if (average > 20){
    console.log('O valor da média aritmética é maior que 20')
} else {
    console.log('O valor da média aritmética é menor ou igual a 20')
};

// Inicie a variável com o primeiro valor do array. Assim, é possível pular a posição 0 e iniciar o for com index = 1.

let higherNumber = numbers[0];

for (let index = 1; index < numbers.length; index += 1) {
  if (numbers[index] > higherNumber) {
    higherNumber = numbers[index];
  }
};

console.log(higherNumber);