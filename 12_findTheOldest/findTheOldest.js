// My solution - seems neater than official solution
const findTheOldest = function(people) {
  
  people.sort(function(a,b) {
    if(!a.yearOfDeath){a.yearOfDeath = new Date().getFullYear()}else{a.yearOfDeath};
    if(!b.yearOfDeath){b.yearOfDeath = new Date().getFullYear()}else{b.yearOfDeath};
    return (a.yearOfDeath-a.yearOfBirth) > (b.yearOfDeath-b.yearOfBirth) ? -1:1;
  })

  return people[0]
};

//Odin solution
// const findTheOldest = function (array) {
//   return array.reduce((oldest, currentPerson) => {
//     const oldestAge = getAge(oldest.yearOfBirth, oldest.yearOfDeath);
//     const currentAge = getAge(
//       currentPerson.yearOfBirth,
//       currentPerson.yearOfDeath
//     );
//     return oldestAge < currentAge ? currentPerson : oldest;
//   });
// };

// const getAge = function (birth, death) {
//   if (!death) {
//     death = new Date().getFullYear();
//   }
//   return death - birth;
// };

// Do not edit below this line
module.exports = findTheOldest;
