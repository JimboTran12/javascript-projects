let superChimpOne = {
   name: "Chad",
   species: "Chimpanzee",
   mass: 9,
   age: 6,
   astronautID: 5,
   move: function() {
      return Math.floor(Math.random() * 11);
   },
};

let salamander = {
   name: "Lacey",
   species: "Axolotl Salamander",
   mass: 0.1,
   age: 5,
   astronautID: 7,
   move: function() {
      return Math.floor(Math.random() * 11);
   },
};


// After you have created the other object literals, add the astronautID property to each one.
let superChimpTwo = {
   name: "Brad",
   species: "Chimpanzee",
   mass: 11,
   age: 6,
   astronautID: 2,
   move: function() {
      return Math.floor(Math.random() * 11);
   },
};

let beagle = {
   name: "Leroy",
   species: "beagle",
   mass: 14,
   age: 5,
   astronautID: 8,
   move: function() {
      return Math.floor(Math.random() * 11);
   },
};

let tardigrade = {
   name:  "Almina",
   species: "tardigrade",
   mass: 0.0000000001,
   age: 1,
   astronautID: 9,
   move: function() {
      return Math.floor(Math.random() * 11);
   },
};
// Create an array to hold the animal objects.
crew = [superChimpOne, salamander,superChimpTwo,beagle,tardigrade];
// Print out the relevant information about each animal.
function crewReports(animal) {
   return `${animal.name} is a ${animal.species}. They are ${animal.age} years old and ${animal.mass} kilograms. Their ID is ${animal.astronautID}`;
}


let fitnessTest = function(animals) {
   let resultsArr = [];
   for (let i = 0; i < animals.length; i++) {
      let distance = 0
      let steps = 0;
      while(distance < 20) {
         distance += animals[i].move();
         steps++;
      }
      let result = `${animals[i].name} took ${steps} turns to take 20 steps.`;
      resultsArr.push(result);
   }
   return resultsArr
}
for (let i =0; i < crew.length; i++) {
   console.log(fitnessTest(crew)[i]);
}
// Start an animal race!