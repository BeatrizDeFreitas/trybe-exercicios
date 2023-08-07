const numbers = [1, 2, 3, 4, 5,];

const foundNumber = (number) => {
    const foundElement = numbers.find((element) => number === element)
    if (!foundElement) {
        return `Number ${number} not found in the array`
    } return `The number ${foundElement} is in the array`;
}

console.log(foundNumber(5));


console.log('=================================================================');


const findBookById = (books, id) => {
    const foundBook = books.find((book) => book.id === id);
    if (!foundBook) {
        return `Book with ID:${id} not found`
    } return foundBook;
  };
  
  const books = [
    { id: 1, title: 'JavaScript: The Good Parts' },
    { id: 2, title: 'Eloquent JavaScript' },
    { id: 3, title: 'JavaScript: The Definitive Guide' }
  ];
  
  const book = findBookById(books, 4);
  console.log(book); 
  
  
  console.log('=================================================================');
  
  const students = [
    { id: 1, name: 'Alice', grade: 'A' },
    { id: 2, name: 'Bob', grade: 'B' },
    { id: 3, name: 'Charlie', grade: 'C' }
  ];

  const findStudentByGrade = (gradeGiven) => {
  
  const foundStudent = students.find((student) => student.grade === gradeGiven)
  if (!foundStudent) {
    return `No student with the grade ${gradeGiven}`
  } return foundStudent;

  }
  console.log(findStudentByGrade('C')); 
  