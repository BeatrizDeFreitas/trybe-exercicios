const numbers = [1, 3, 5, 7, 8];

const hasEvenNumber = numbers.some((number) => number % 2 === 0);
console.log(hasEvenNumber); // Output: true


console.log('=================================================================');


const ages = [22, 27, 18, 31, 35];

const isAdultPresent = ages.some((age) => age >= 18);
console.log(isAdultPresent); // Output: true


console.log('=================================================================');


const fruits = ['apple', 'banana', 'pear', 'orange'];

const hasMango = fruits.some((fruit) => fruit === 'mango');
console.log(hasMango); // Output: false
