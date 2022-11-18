const ftoc = function(fTemp) {
  let num = (fTemp-32)*5/9
  return Math.round(num*10)/10

};

const ctof = function(cTemp) {
  let num = (cTemp*9/5)+32
  return Math.round(num*10)/10

};

//TOP Solution
// const ftoc = function(f) {
//   return Math.round((f - 32) * (5/9) * 10) / 10;
//  };
 
//  const ctof = function(c) {
//    return Math.round(((c * 9/5) + 32) * 10) / 10;
//  };

// Do not edit below this line
module.exports = {
  ftoc,
  ctof
};
