const numbers = [1, 2, 3, 4, 5];

numbers.forEach((number) => {
  console.log(number);
});

console.log('===============================================================');

const doubledNumbers = [];
numbers.forEach((number) => {
    doubledNumbers.push(number * 2);
  });
console.log(doubledNumbers);


console.log('===============================================================');


const numbers2 = [1, 2, 3, 4, 5];

numbers2.forEach((number, index, array) => {
  array[index] = number * 2;
});

console.log(numbers2); 



