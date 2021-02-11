// FORK this starter file and save it to your own Repl.it account.


// Declare and initialize the 12 variables here:
const input = require('readline-sync');

let info = input.question("Enter the value for astronautCount: ");
let date = "Monday 2019-03-18";
let time = "10:05:34 AM";
let astronautCount = 7;
let astronautStatus = "ready";
let averageAstronautMassKg = 80.7;
let crewMassKg = info * averageAstronautMassKg;
let fuelMassKg	= 760000;
let shuttleMassKg	= 74842.31;
let totalMassKg =	crewMassKg + fuelMassKg + shuttleMassKg;
let fuelTempCelsius =	-225;
let fuelLevel	= "100%";
let weatherStatus = "clear";
let dash = "------------------------------";
let first = "> LC04 - LAUNCH CHECKLIST"
let second = "> ASTRONAUT INFO";
let third = "> FUEL DATA";
let fourth = "> MASS DATA";
let fifth = "> FLIGHT PLAN";
let sixth = "> OVERALL STATUS";

// Write code to generate the LC04 report here:
console.log (dash);
console.log (first);
console.log (dash);
console.log ("Date: " + date);
console.log ("Time: " + time);
console.log (dash);
console.log (second);
console.log (dash);
console.log ("* count: " + info);
console.log ("* status: " + astronautStatus);
console.log (dash);
console.log (third);
console.log (dash);
console.log ("* Fuel temp celsius: " + fuelTempCelsius);
console.log("* Fuel level: " +  fuelLevel);
console.log (dash);
console.log (fourth);
console.log (dash);
console.log ("* Crew mass: " + crewMassKg +"kg");
console.log("* Fuel mass: " + fuelMassKg + "kg");
console.log("* Shuttle mass: " + shuttleMassKg + "kg");
console.log("* Total mass: " +  totalMassKg + "kg");
console.log (dash);
console.log (fifth);
console.log (dash);
console.log ("* weather: " + weatherStatus);
console.log (dash);
console.log (sixth);
console.log (dash);
console.log ("* Clear for takeoff: " + "YES");
// When done, have your TA check your code.


// BONUS: Use readline-sync to prompt the user to enter the number of astronauts going on the mission.
