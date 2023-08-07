const numbers = [1, 2, 3, 4, 5];

const allPositive = numbers.every((number) => number > 0);
console.log(allPositive); // Output: true


console.log('===========================================================');


const words = ['apple', 'banana', 'pear', 'orange'];

const sameLength = words.every((word) => word.length === 5);
console.log(sameLength); // Output: false


console.log('===========================================================');


const students = [
    { name: 'Alice', grade: 'A' },
    { name: 'Bob', grade: 'B' },
    { name: 'Charlie', grade: 'A' }
  ];
  
  const allPassed = students.every((student) => student.grade === 'A');
  console.log(allPassed); // Output: false
  