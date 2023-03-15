//My working solution
// const getTheTitles = function(books) {
//   let booksArray = [];
//   for(let i=0; i<books.length; i++){
//     booksArray.push(books[i].title)
//   }
//   //console.log(booksArray)
//   return booksArray
// };

//Odin project solution - much better
const getTheTitles = function(array) {
  return array.map(book => book.title);
};


// Do not edit below this line
module.exports = getTheTitles;
