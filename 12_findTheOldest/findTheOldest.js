const findTheOldest = function(people) {
  
  people.sort(function(a,b) {
    if(!a.yearOfDeath){a.yearOfDeath = new Date().getFullYear()}else{a.yearOfDeath};
    if(!b.yearOfDeath){b.yearOfDeath = new Date().getFullYear()}else{b.yearOfDeath};
    return (a.yearOfDeath-a.yearOfBirth) > (b.yearOfDeath-b.yearOfBirth) ? -1:1;
  })

  return people[0]
};

// Do not edit below this line
module.exports = findTheOldest;
