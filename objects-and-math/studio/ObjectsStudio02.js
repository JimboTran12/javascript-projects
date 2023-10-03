// Code your orbitCircumference function here:
function orbitCircumference(radius) {
  return Math.round(Math.PI * radius * 2);
}


// Code your missionDuration function here:
function missionDuration(numOrbits, radius = 2000, speed = 28000) {
  let distance = orbitCircumference(radius) * numOrbits;
  let time = distance / speed;
  return Math.round(time * 100) / 100;
}
console.log(`The mission travel ${orbitCircumference(2000)} km around the planet, and it will take ${missionDuration(5)} to complete.`);

// Copy/paste your selectRandomEntry function here:
function selectRandomEntry(idNumbers) {
  let id = Math.floor(Math.random() * idNumbers.length);
  return(idNumbers[id]);
}


// Code your oxygenExpended function here:
function oxygenExpended(candidate, radius = 2000, speed = 28000) {
  let time = missionDuration(3, radius, speed);
  let o2Used = candidate.o2Used(time);
  o2Used = Math.round(o2Used * 1000) / 1000;
  return `${candidate.name} will perform the spacewalk, which will last ${time} hours and require ${o2Used} kg of oxygen.`;
}

// Candidate data & crew array.
let candidateA = {
   'name':'Gordon Shumway',
   'species':'alf',
   'mass':90,
   'o2Used':function(hrs){return 0.035*hrs},
   'astronautID':414
 };
 let candidateB = {
   'name':'Lassie',
   'species':'dog',
   'mass':19.1,
   'o2Used':function(hrs){return 0.030*hrs},
   'astronautID':503
 };
 let candidateC = {
   'name':'Jonsey',
   'species':'cat',
   'mass':3.6,
   'o2Used':function(hrs){return 0.022*hrs},
   'astronautID':796
 };
 let candidateD = {
   'name':'Paddington',
   'species':'bear',
   'mass':31.8,
   'o2Used':function(hrs){return 0.047*hrs},
   'astronautID':291
 };
 let candidateE = {
   'name':'Pete',
   'species':'tortoise',
   'mass':417,
   'o2Used':function(hrs){return 0.010*hrs},
   'astronautID':599
 };
 let candidateF = {
   'name':'Hugs',
   'species':'ball python',
   'mass':2.3,
   'o2Used':function(hrs){return 0.018*hrs},
   'astronautID':890
 };
 
 let crew = [candidateA,candidateC,candidateE];
 for (let i = 0; i < crew.length; i++) {
    console.log(oxygenExpended(crew[i], Math.random() * 1000, Math.random() * 10000));
 }