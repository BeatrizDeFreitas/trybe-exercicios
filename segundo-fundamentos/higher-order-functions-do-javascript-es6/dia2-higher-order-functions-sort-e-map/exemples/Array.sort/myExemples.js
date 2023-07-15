const numbers = [5, 3, 1, 4, 2];

const sortedNumbers = numbers.sort((a, b) => a - b);
console.log(sortedNumbers); // Output: [1, 2, 3, 4, 5]


console.log('=========================================================');


const fruits = ['apple', 'banana', 'pear', 'orange'];

const sortedFruits = fruits.sort();
console.log(sortedFruits); // Output: ['apple', 'banana', 'orange', 'pear']


console.log('=========================================================');


const books = [
    { title: 'JavaScript: The Good Parts', author: 'Douglas Crockford', year: 2008 },
    { title: 'Eloquent JavaScript', author: 'Marijn Haverbeke', year: 2011 },
    { title: 'JavaScript: The Definitive Guide', author: 'David Flanagan', year: 2020 }
  ];
  
  const sortedBooks = books.sort((a, b) => a.year - b.year);
  console.log(sortedBooks);
  /* Output:
  [
    { title: 'JavaScript: The Good Parts', author: 'Douglas Crockford', year: 2008 },
    { title: 'Eloquent JavaScript', author: 'Marijn Haverbeke', year: 2011 },
    { title: 'JavaScript: The Definitive Guide', author: 'David Flanagan', year: 2020 }
  ]
  */
  