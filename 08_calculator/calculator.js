const add = function(a,b) {
	return a+b;
};

const subtract = function(a,b) {
	return a-b;
};

const sum = function(myArray) {
  return myArray.reduce((total, current) => total + current, 0)
};

const multiply = function(myArray) {
  return myArray.reduce((total, current) => total * current, 1)
};

const power = function(a,b) {
	return a**b

};

// const factorial = function(num) {
//   if (num===0) {
//     return 1
//   };
  
//   let fact = 1;
//   for (let i=num; i>0; i--) {
//     fact *= i;
//   }
//   return fact;
// };

//recursion solution
const factorial = function(num) {
  if (num===0) {
    return 1
  };
  return num * factorial (num-1);
};


// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
