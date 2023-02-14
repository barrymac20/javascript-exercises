const palindromes = function (string) {
  const lettersString = string.toLowerCase().replace(/[^a-z]/g,""); //.replace(/[.,\/#!$%\^&\*;:{}=\-_`~() ]/g,"") 
  const reversedString = lettersString.split('').reverse().join('')
  
  return reversedString === lettersString


};

// Do not edit below this line
module.exports = palindromes;
