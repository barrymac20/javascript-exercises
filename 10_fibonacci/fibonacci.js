//My solution
const fibonacci = function(num) {
  let array = [];
  if (num<0) {return "OOPS"};
  for (let i=0; i<num+1; i++){
    if (i == 0 || i == 1 ){
      array.push(i)
    } else{
    array.push(array[i-2]+array[i-1])
    }  
  }
  return(array[num])
};

//Odin Project Solution
// const fibonacci = function(count) {
//   if (count < 0) return "OOPS";
//   if (count === 0) return 0;
//   let a = 0;
//   let b = 1;
//   for (let i = 1; i < count; i++) {
//     const temp = b;
//     b = a + b;
//     a = temp;
//   }
//   return b;
// };

// Do not edit below this line
module.exports = fibonacci;
