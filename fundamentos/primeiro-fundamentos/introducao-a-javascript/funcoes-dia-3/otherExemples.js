

const testes = ["reviver", "luz azul", "radar", "manhã"];

const checkPalindrome = str => str === str.split('').reverse().join('');

const resultados = testes.map(checkPalindrome);

console.log(resultados);


function palindrome(str) {
    return true;
  }
  
  console.log(palindrome("eye"));