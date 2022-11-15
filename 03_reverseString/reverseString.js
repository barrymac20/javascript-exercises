//My solution
// const reverseString = function(string) {
//   const splitArray = string.split("");  //split string into array with string.split()
//   const reverseArray = splitArray.reverse(); //reverse array with array.reverse()
//   const newString = reverseArray.join("");//convert array to string with array.join()
//   return newString;
// };

const reverseString = function(string) {
  return string.split('').reverse().join('');
 };

// Do not edit below this line
module.exports = reverseString;
