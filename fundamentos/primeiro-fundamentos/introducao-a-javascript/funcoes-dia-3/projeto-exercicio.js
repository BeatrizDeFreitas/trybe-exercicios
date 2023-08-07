



function verifyPalindrome(str) {     
    for(let index = 0; index < str.length / 2; index += 1) 


    if (str[index] != str[str.length - index - 1]) return false;


    return true;
  }


  let str = 'desenvolvimento';


  console.log(verifyPalindrome(str));


  