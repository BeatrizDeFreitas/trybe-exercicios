// array original
const items = ['Camiseta', 'Carregador', 'Chinelo'];

// cria um novo array com os itens do array original espalhados
const newItems = [...items, 'Meia'];

console.log(newItems);


console.log('----------------------------------------------------------------------');


const spring = ['OUT', 'NOV', 'DEZ'];
const summer = ['JAN', 'FEV', 'MAR'];
const fall = ['ABR', 'MAI', 'JUN'];
const winter = ['JUL', 'AGO', 'SET'];

const months = [...summer, ...fall, ...winter, ...spring];
console.log(months);


console.log('----------------------------------------------------------------------');


const product = {
    id: 1,
    name: 'Camiseta',
};

// adiciona a chave `price` com o valor `23`
const newProduct = { ...product, price: 23 };

console.log(newProduct);


console.log('----------------------------------------------------------------------');


const product2 = {
    id: 1,
    name: 'Camiseta',
};

const productPrice2 = {
  price: 23
}

const newProduct2 = { ...product2, ...productPrice2 };

console.log(newProduct2); 


console.log('----------------------------------------------------------------------');


const randomNumbers = [57, 8, 5, 800, 152, 74, 630, 98, 40];
console.log(Math.max(...randomNumbers)); // 800


console.log('----------------------------------------------------------------------');


