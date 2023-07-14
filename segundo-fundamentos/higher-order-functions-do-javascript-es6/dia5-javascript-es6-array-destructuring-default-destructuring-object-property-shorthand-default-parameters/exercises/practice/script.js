const myList = [5, 2, 3];

const swap = ([a, b, c]) => [c, b, a];


console.log('================================================================');


const palio = ['Palio', 'Fiat', 2019];
const shelbyCobra = ['Shelby Cobra', 'Ford', 1963];
const chiron = ['Chiron', 'Bugatti', 2016];

const toObject = ([name, brand, year]) => ({ name, brand, year });

console.log(toObject(palio));


console.log('================================================================');


const greet = (name, greeting = 'hi') => {
    return `${greeting} ${name}`
}

// Retornos esperados:
console.log(greet('John')); // 'Hi John'
console.log(greet('John', 'Good morning')); // 'Good morning John'
console.log(greet('Isabela', 'Oi')); // 'Oi Isabela'


console.log('================================================================');


const student1 = {
    name: `Claudia`,
    lastName: `Farias`,
    age: 23,
  }
  
  const student2 = {
    name: `Vitor`,
    age: 20,
  }
  
  // escreva 'getLastName' abaixo para receber os objetos e retornar sua propriedade `lastName`

  const getLastName = (student) => {
    const { lastName = 'lastName não preenchido'} = student
    return lastName;
  }
  
  console.log(getLastName(student1));
  console.log(getLastName(student2));


  console.log('================================================================');


  const moreStudents = [
    'Chris', 
    ['Ahmad', 'Antigoni'], 
    ['Toby', 'Sam']
  ];


  const [ students1, [ students2, students3 ], [students4, students5 ] ] = moreStudents;

console.log(students1, students2, students3, students4, students5);