function giveGreeting() {
  return `Olá, boas-vindas à Trybe!`;
};

console.log(giveGreeting());

/////////////////////////////////////////////////////////////////////////////////////////

function sum(number1, number2) {
    return number1 + number2;
};

console.log(sum(15, 25));

// OU

function sum(num1, num2) {
  return num1 + num2;
};

const result = sum(10, 8);

console.log(result); 

////////////////////////////////////////////////////////////////////////////////////////////

const balance = 100;

function sumBalance(value) {
  return value + balance;
};

function subBalance(value) {
  return balance - value;
};

function multBalance(value) {
  return value * balance;
};

function divBalance(value) {
  return balance / value;
};

// Chamadas das funções passando o valor do parâmetro
console.log(sumBalance(300)); // 400
console.log(subBalance(50)); // 50
console.log(multBalance(2)); // 200
console.log(divBalance(5)); // 20

////////////////////////////////////////////////////////////////////////////////////////////

const trybeBankCustomers = ['Oliva', 'Nat', 'Gus'];

function greetCustomer(customer) {
  for (let index = 0; index < customer.length; index += 1) {
    console.log(`Olá, ${customer[index]}. Essa é sua conta do TrybeBank.`);
  }
};

greetCustomer(trybeBankCustomers); 


////////////////////////////////////////////////////////////////////////////////////////////


const trybeBankCustomer = ['Oliva', 'Nat', 'Gus'];

function addCustomer(customer) {
  if (typeof customer != 'string') {
    return 'O parâmetro passado deve ser do tipo string!';
  }
  
  trybeBankCustomer.push(customer);
  return 'Pessoa adicionada com sucesso!';
};

console.log(addCustomer(true)); // O parâmetro passado deve ser do tipo "string!"
console.log(addCustomer('Joaquim')); // Pessoa adicionada com sucesso!
console.log(trybeBankCustomer); // [ 'Oliva', 'Nat', 'Gus', 'Joaquim' ]

////////////////////////////////////////////////////////////////////////////////////////////

 const trybeBankCustomerss = ['Oliva', 'Nat', 'Gus'];

function addCustomers(customers, newCustomers) {
  for (let index = 0; index < newCustomers.length; index += 1) {
    if (typeof newCustomers[index] === 'string') {
       customers.push(newCustomers[index]);
   } else {
      return 'Todos os valores precisam ser strings.';
   }
 }
return trybeBankCustomerss;
};

console.log(addCustomers(trybeBankCustomerss, ['Carolina', 'Adamastor'])); // [ 'Oliva', 'Nat', 'Gus', 'Carolina', 'Adamastor' ]
console.log(addCustomers(trybeBankCustomerss, ['Miranda', 78])); // Todos os valores precisam ser strings.

////////////////////////////////////////////////////////////////////////////////////////////

function subtraction(num1, num2) {
    return num1 - num2;
  };

  console.log(subtraction(5, 2))

  // COM ARROW FUNCTION:

  const subtractions = (nume1, nume2) => {
    return nume1 - nume2;
  };

  console.log(subtractions(100, 30));

  //    MAIS SIMPLIFICAdo:

  const subtractionss = (num1, num2) => num1 - num2;

  console.log(subtractionss(200, 90));

  ////////////////////////////////////////////////////////////////////////////////////////////

  function sumArray(array) {
    let sum = 0;
    for (let index=0; index < array.length; index += 1) {
        sum = sum + array[index];
    }
    return sum;
  }

  console.log(sumArray([10,20,30,40,50]));
  console.log(sumArray([89,3,67,128,1]));

  // COM ARROW FUNCTION

  const sumArrays = (arrays) => {

    let sum = 0;
    for (let index=0; index < arrays.length; index += 1) {
        sum = sum + arrays[index];
    }
    return sum;
  }

  console.log(sumArrays([11,20,30,40,50]));
  console.log(sumArrays([90,3,67,128,1]));

    ////////////////////////////////////////////////////////////////////////////////////////////

    const countWords = (phrase) => {
        return phrase.split(' ').length;
    }

    console.log(countWords('Fala tribo, beleza?'))