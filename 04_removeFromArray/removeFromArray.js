
const removeFromArray = function(myArray, ...itemsToRemove) { //... before argument allow multiple argument
  
  itemsToRemove.forEach(function(item) { //for loop for each item in itemsToRemove // could use for (const item of itemsToRemove) {
    const index = myArray.indexOf(item); //get the index of the item in myArray
    if (index > -1) //if index is zero or greater
      myArray.splice(index, 1); //splice at that index and remove one
  });
  return myArray
};


// Do not edit below this line
module.exports = removeFromArray;
