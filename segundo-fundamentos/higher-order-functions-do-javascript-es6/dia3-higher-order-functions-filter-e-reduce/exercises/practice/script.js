// Fonte: <https://restcountries.com/v2/all>
const countries = [
  {
    name: 'Afghanistan',
    region: 'Asia',
    currencies: [{ code: 'AFN', name: 'Afghan afghani' }],
    capital: 'Kabul',
    population: 40218234,
    area: 652230
  },
  {
    name: 'Åland Islands',
    region: 'Europe',
    currencies: [{ code: 'EUR', name: 'Euro' }],
    capital: 'Mariehamn',
    population: 28875,
    area: 1580
  },
  {
    name: 'Albania',
    region: 'Europe',
    currencies: [{ code: 'ALL', name: 'Albanian lek' }],
    capital: 'Tirana',
    population: 2837743,
    area: 28748
  },
  {
    name: 'Algeria',
    region: 'Africa',
    currencies: [{ code: 'DZD', name: 'Algerian dinar' }],
    capital: 'Algiers',
    population: 44700000,
    area: 2381741
  },
  {
    name: 'American Samoa',
    region: 'Oceania',
    currencies: [{ code: 'USD', name: 'United States Dollar' }],
    capital: 'Pago Pago',
    population: 55197,
    area: 199
  },
  {
    name: 'Andorra',
    region: 'Europe',
    currencies: [{ code: 'EUR', name: 'Euro' }],
    capital: 'Andorra la Vella',
    population: 77265,
    area: 468
  },
  {
    name: 'Angola',
    region: 'Africa',
    currencies: [{ code: 'AOA', name: 'Angolan kwanza' }],
    capital: 'Luanda',
    population: 32866268,
    area: 1246700
  },
  {
    name: 'Anguilla',
    region: 'Americas',
    currencies: [{ code: 'XCD', name: 'East Caribbean dollar' }],
    capital: 'The Valley',
    population: 13452,
    area: 91
  }
];


const expectedResult1 = 120797034;
const getPopulation = () => {
 return countries.reduce((accumulator, currentValue) => 
    accumulator + currentValue.population, 0)
}
console.log(getPopulation());


console.log('====================================================');


const expectedResult2 = 4311757;
const getTotalArea = () => {
 return countries.reduce((accumulator, currentValue) =>
    accumulator + currentValue.area, 0)
}
console.log(getTotalArea());


console.log('====================================================');


const expectedResult3 = {
    name: 'American Samoa',
    region: 'Oceania',
    currencies: [{ code: 'USD', name: 'United States Dollar' }],
    capital: 'Pago Pago',
    population: 55197,
    area: 199
  }

  const longestName = () => {
    return countries.reduce((accumulator, currentValue) => {
        return accumulator.name.length > currentValue.name.length ? accumulator : currentValue;
    })
};
console.log(longestName());


console.log('====================================================');


const names = [
    'Aanemarie', 'Adervandes', 'Akifusa',
    'Abegildo', 'Adicellia', 'Aladonata',
    'Abeladerco', 'Adieidy', 'Alarucha',
  ];

  const lettersArray = names.join('').toLowerCase().split('');
  const countA = () => {
    return lettersArray.reduce((accumulator, currentValue) => {
        return currentValue === 'a' ? accumulator += 1 : accumulator
    }, 0)
  }
console.log(countA());


console.log('====================================================');


// O index 0 do array `students` equivale ao index 0 do array `grades`
const students = ['Pedro Henrique', 'Miguel', 'Maria Clara'];
const grades = [[9, 8, 10, 7, 5], [10, 9, 9, 10, 8], [10, 7, 10, 8, 9]];
const expectedResult = [
 { name: 'Pedro Henrique', average: 7.8 },
 { name: 'Miguel', average: 9.2 },
 { name: 'Maria Clara', average: 8.8 },
];
const studentAverage = () => {
  return nameAndEverage = students.map((student, index) => (
    {
        name: student,
        average: (grades[index].reduce((accumulator, currentValue) => accumulator + currentValue, 0) / grades[index].length)
    }
  ))
}
console.log(studentAverage());