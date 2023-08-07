var userEmail = 'maria@email.com';

let userId = 78945;

const userLocation = 'Brasil';

var userName = 'Isabella';
console.log(userName); // Isabella

var userName = 'Lucas';
console.log(userName); // Lucas

const favoriteLanguage = 'Javascript';
console.log(favoriteLanguage);

let patientId = 50;
let isEnrolled = true;
let patientEmail = 'ana@email.com';
console.log(typeof patientId); // number

// Nomeando variáveis para armazenar strings
const fullName = "João Silva";
const city = "São Paulo";

// Nomeando variáveis para armazenar números
const ages = 30;
const height = 1.75;

const age = 87;

if (age >= 18) {
  console.log('Maior de idade');
} else {
  console.log('Menor de idade');
}


/////////////////////////////////////////////////////


const personAges = 17;
let couldVote;

if (personAges >= 16) {
  couldVote = 'Pode votar!';
} else {
  couldVote = 'Não pode votar!';
}

console.log(couldVote); // Pode votar!


const personAge = 15;

const canVote = personAge >= 16 ? 'Pode votar!' : 'Não pode votar!';

console.log(canVote); // Pode votar!

const grade = 80;
let message = '';

if (grade >= 80) {
  message = "Parabéns, você faz parte do grupo de pessoas aprovadas!";
} else if (grade >= 60 && grade < 80) {
  message = "Você está na nossa lista de espera.";
} else {
  message = "Infelizmente, você reprovou.";
};

console.log(message);


const food = 'pão';
const drink = 'café';

if (drink === 'café' && food === 'pão') {
  console.log('Obrigado!');
} else {
  console.log('Erraram meu pedido.');
}


let currentHour = 22;
message = '';

if (currentHour >= 22) {
  message = 'Não deveríamos comer nada, é hora de dormir';
} else if (currentHour >= 18 && currentHour < 22) {
  message = 'Rango da noite, vamos jantar :D';
} else if (currentHour >= 14 && currentHour < 18) {
  message = 'Hora do almoço!!!';
} else {
  message = 'Hmmm, cheiro de café recém-passado';
}
console.log(message)

const principalDrink = 'café';
const alternativeDrink = 'suco de laranja';

if (principalDrink === 'café' || alternativeDrink === 'suco de laranja') {
  console.log("Agradeço por me atender :D");
} else {
  console.log("Ei, não foi isso que eu pedi!");
}


const goToSP = true;
const goToGO = false;

if ((goToSP === true && goToGO === false) || (goToSP === false && goToGO === true)) {
  console.log('Eu fui para apenas um dos lugares.');
} else {
  console.log('Eu fui para os dois, ou para nenhum.');
}



console.log(!(2 + 2) === 4);

let charmander = "Melhor Pokémon inicial.";

console.log(!charmander); // false