//SOME()
// [🏀, 🏓, 🍎, 🍕, 🥝, 🐳, 🍎].some(🍕) -> true

//EVERY()
// [🏀, 🏓, 🍎, 🍕, 🥝, 🐳, 🍎].every(🍎) -> false;

//FIND()
// [🏀, 🏓, 🍎, 🍕, 🥝, 🐳, 🍎].find(🥝) -> 🥝;

//FILTER()
// [🏀, 🍕, 🍎, 🍕, 🍕, 🐳, 🍎].filter(🍕) -> [🍕, 🍕, 🍕];

//FOREACH()
// [2, 4, 6, 8, 10].forEach(* 2) -> [4, 8, 12, 16, 20]

//SORT()
// [7, 5, 8, 3, 2, 1, 4, 6].sort() -> [1, 2, 3, 4, 5, 6, 7, 8]

//MAP()
// [🐮, 🥔, 🌽, 🪵, 🍎].map(🏭) -> [🍔, 🍟, 🍿, 🪑, 🥧]

//REDUCE()
// [🍔, 🍟, 🍿, 🥧, 🍩].reduce(🍽) -> 💩 

const arrayOfValues = ['josé', 50, 0.25, { comida: 'Chocolate' }];

arrayOfValues.forEach((element, index) => {
  console.log(`O elemento atual é: ${element} e possui o index: ${index}`);
});

// O código acima está organizado da seguinte maneira:

// arrayOfValues: nome do array que será percorrido;
// .forEach: a HOF usada. Poderia ser outra HOF, como .find, .some, .every, entre outras, que a estrutura seria a mesma;
// element: valor do elemento do array;
// (element, index) => { /* código */ }: função a ser executada.