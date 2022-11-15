

const repeatString = function(string, num) {
  if (num<0) return "ERROR" ;
  let newString = ""; //placing this inside function clears the newString variable everytime its called
  for (let i=1; i<=num; i++) {;
  newString += string; //instead of newString = newString + string
  }
  return newString;
};

// Do not edit below this line
module.exports = repeatString;
