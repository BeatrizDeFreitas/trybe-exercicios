const rectangleArea = (width, height) => width * height;

const rectangle1 = [1, 2];
const rectangle2 = [3, 5];
const rectangle3 = [6, 9];
const rectangles = [rectangle1, rectangle2, rectangle3];

rectangles.forEach((rectangle) => {
  console.log(rectangleArea(...rectangle)); // Altere o parâmetro recebido por rectangleArea()
});


console.log('===================================================================================');


const sum = (...numbers) => {
    return numbers.reduce(((accumulator, currentValue) => accumulator + currentValue), 0)
}
console.log(sum(4, 5, 6));


console.log('===================================================================================');


// name: nome da pessoa, age: idade, likes: gosta de, nationality: nacionalidade

const alex = {
    name: 'Alex',
    age: 26,
    likes: ['fly fishing'],
    nationality: 'Australian',
  };
  
  const gunnar = {
    name: 'Gunnar',
    age: 30,
    likes: ['hiking', 'scuba diving', 'taking pictures'],
    nationality: 'Icelandic',
  };
  
  // complete a assinatura da função abaixo
  const personLikes = ({name, age, likes}) => `${name} is ${age} years old and likes ${likes.join(', ')}.`;
  // <nome> tem <anos de idade> e gosta de <gostos da pessoa>
  
  // Retornos esperados:
  console.log(personLikes(alex)); // 'Alex is 26 years old and likes fly fishing.'
  console.log(personLikes(gunnar)); // 'Gunnar is 30 years old and likes hiking, scuba diving, taking pictures.'


  console.log('===================================================================================');


  const people = [
    {
      name: 'Nicole',
      bornIn: 1992,
      nationality: 'Australian',
    },
    {
      name: 'Harry',
      bornIn: 2008,
      nationality: 'Australian',
    },
    {
      name: 'Toby',
      bornIn: 1901,
      nationality: 'Australian',
    },
    {
      name: 'Frida',
      bornIn: 1960,
      nationality: 'Dannish',
    },
    {
      name: 'Fernando',
      bornIn: 2001,
      nationality: 'Brazilian',
    },
    // bornIn: nascido em
  ];

const filterPeople = (arr) => {
    return people.filter(({ nationality, bornIn }) => {
      return nationality === 'Australian' && bornIn > 1900 & bornIn <= 2000;
    });
  }

  console.log(filterPeople(people));


  console.log('===================================================================================');


  const ships = [
    {
      name: 'Titanic',
      length: 269.1,
      measurementUnit: 'meters',
    },
    {
      name: 'Queen Mary 2',
      length: 1132,
      measurementUnit: 'feet',
    },
    {
      name: 'Yamato',
      length: 256,
      measurementUnit: 'meters',
    },
    // measurementUnit: unidade de medida
  ];
  
  const shipLength = ({ name, length, measurementUnit}) => `${name} is ${length} ${measurementUnit} long`
  
  // retorno esperado
  console.log(shipLength(ships[0])); // 'Titanic is 269.1 meters long'
  console.log(shipLength(ships[1])); // 'Queen Mary 2 is 1132 feet long'
  console.log(shipLength(ships[2])); // 'Yamato is 256 meters long'


  console.log('===================================================================================');



const yearSeasons = {
    spring: ['March', 'April', 'May'],
    summer: ['June', 'July', 'August'],
    autumn: ['September', 'October', 'November'],
    winter: ['December', 'January', 'February'],
  };

  const { spring, summer, autumn, winter} = yearSeasons
  
  const months = [ ...winter, ...spring, ...summer, ...autumn ];
  
  console.log(months);