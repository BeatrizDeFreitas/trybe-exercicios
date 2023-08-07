const pessoasAprovadas = ['Ana Beatriz', 'Caio Nunes', 'Afonso Ribeiro', 'Leonardo Lins']; // lista de nomes

pessoasAprovadas.forEach((nome, index) => {
  pessoasAprovadas[index] = pessoasAprovadas[index].toUpperCase(); // acessa cada elemento do array e atualiza para letra maiúscula
});

console.log(pessoasAprovadas); // ['ANA BEATRIZ', 'CAIO NUNES', 'AFONSO RIBEIRO', 'LEONARDO LINS']


console.log('---------------------------------------------');


const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

numbers.forEach((element) => {
  console.log(element * 2); // 0, 2, 4, 6, 8, 10, 12, 14, 16, 18
});


console.log('---------------------------------------------');


const numbers2 = [3, 5, 7, 9, 11, 13, 15, 17, 19, 21];

numbers2.forEach((element) => console.log(element * 2));