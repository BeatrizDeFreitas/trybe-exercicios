const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const evenNumbers = numbers.filter((number) => number % 2 === 0);
console.log(evenNumbers); // Output: [2, 4, 6, 8, 10]


console.log('========================================================');


const words = ['apple', 'banana', 'orange', 'kiwi', 'grape'];

const wordsWithFiveLetters = words.filter((word) => word.length === 5);
console.log(wordsWithFiveLetters); // Output: ['apple', 'grape']


console.log('========================================================');


const students = [
    { name: 'Alice', age: 22, grade: 'A' },
    { name: 'Bob', age: 19, grade: 'B' },
    { name: 'Charlie', age: 25, grade: 'A' },
    { name: 'David', age: 18, grade: 'C' }
  ];
  
  const adultsWithGoodGrades = students.filter((student) => student.age >= 18 && student.grade === 'A');
  console.log(adultsWithGoodGrades);
  /* Output:
  [
    { name: 'Alice', age: 22, grade: 'A' },
    { name: 'Charlie', age: 25, grade: 'A' }
  ]
  */
  console.log('========================================================');


  const products = [
    { name: 'Laptop', category: 'Electronics', price: 1000 },
    { name: 'Smartphone', category: 'Electronics', price: 800 },
    { name: 'Shirt', category: 'Clothing', price: 25 },
    { name: 'Jeans', category: 'Clothing', price: 50 },
    { name: 'Headphones', category: 'Electronics', price: 100 },
  ];
  
  // Filter electronics products with price less than $100
  const affordableElectronics = products.filter((product) => product.category === 'Electronics' && product.price <= 100);
  console.log(affordableElectronics);
  /* Output:
  [
    { name: 'Smartphone', category: 'Electronics', price: 800 },
    { name: 'Headphones', category: 'Electronics', price: 100 }
  ]
  */
  


  console.log('========================================================');


  const data = [10, 'apple', false, 25, null, 42, true, 'banana', undefined];

// Filter numbers and exclude falsy values
const numbersOnly = data.filter((item) => typeof item === 'number');
console.log(numbersOnly); // Output: [10, 25, 42]



  console.log('========================================================');


const colors = ['red', 'blue', 'red', 'green', 'blue', 'yellow', 'green'];

// Filter unique colors (remove duplicates)
const uniqueColors = colors.filter((color, index, array) => array.indexOf(color) === index);
console.log(uniqueColors); // Output: ['red', 'blue', 'green', 'yellow']


console.log('========================================================');


const students2 = [
    { name: 'Alice', age: 22, grade: 'A', gender: 'female' },
    { name: 'Bob', age: 19, grade: 'B', gender: 'male' },
    { name: 'Charlie', age: 25, grade: 'A', gender: 'male' },
    { name: 'David', age: 18, grade: 'C', gender: 'male' }
  ];
  
  // Filter students based on user-defined criteria
  const filteredStudents = students2.filter((student) => {
    const minAge = 20;
    const goodGrade = 'A';
    const targetGender = 'female';
  
    return student.age >= minAge && student.grade === goodGrade && student.gender === targetGender;
  });
  
  console.log(filteredStudents); // Output: [{ name: 'Alice', age: 22, grade: 'A', gender: 'female' }]
  