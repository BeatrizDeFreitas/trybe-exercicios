const numbers = [1, 2, 3, 4, 5];

const doubledNumbers = numbers.map((number) => number * 2);
console.log(doubledNumbers); // Output: [2, 4, 6, 8, 10]


console.log('=========================================================');


const fruits = ['apple', 'banana', 'pear', 'orange'];

const uppercaseFruits = fruits.map((fruit) => fruit.toUpperCase());
console.log(uppercaseFruits); // Output: ['APPLE', 'BANANA', 'PEAR', 'ORANGE']


console.log('=========================================================');


const books = [
    { id: 1, title: 'JavaScript: The Good Parts', author: 'Douglas Crockford' },
    { id: 2, title: 'Eloquent JavaScript', author: 'Marijn Haverbeke' },
    { id: 3, title: 'JavaScript: The Definitive Guide', author: 'David Flanagan' }
  ];
  
  const bookTitles = books.map((book) => book.title);
  console.log(bookTitles); // Output: ['JavaScript: The Good Parts', 'Eloquent JavaScript', 'JavaScript: The Definitive Guide']


  console.log('=========================================================');
  

  const formattedBooks = books.map((book) => ({
    id: book.id,
    label: `${book.title} by ${book.author}`
  }));
  console.log(formattedBooks);


  console.log('=========================================================');


const colors = ['red', 'blue', 'red', 'green', 'blue', 'yellow', 'green'];

const uniqueColors = colors.map((color, index, array) => array.indexOf(color) === index && color);
console.log(uniqueColors); // Output: ['red', 'blue', 'green', 'yellow']

