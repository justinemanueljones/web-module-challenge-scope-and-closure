// ⭐️ Example Challenge START ⭐️

/**
 * ### Challenge `processFirstItem`
 * 
 * @instructions
 * Implement a higher-order function called `processFirstItem`.
 * It takes two arguments:
 * @param stringList an array of strings.
 * @param callback function that takes a string as its argument.
 * @returns the result of invoking `callback` with the FIRST element in `stringList`.
 * 
 * Example of usage of this higher-order function:
 * Invoking `processFirstItem` passing `['foo', 'bar']` and `(str) => str + str`,
 * should return 'foofoo'.
*/
function processFirstItem(stringList, callback) {
  return callback(stringList[0])
}
// ⭐️ Example Challenge END ⭐️
///// M V P ///////

/* Task 1: `counterMaker`
 * Study the code for counter1 and counter2. Answer the questions below.
 * 
 * 1. What is the difference between counter1 and counter2?
 * 
 * counter 1 is block scope and counter 2 is global scope
 * 
 * 2. Which of the two uses a closure? How can you tell?
 * 
 * counter 1 is a closure it declares in the function 
 * 
 * 3. In what scenario would the counter1 code be preferable? In what scenario would counter2 be better? 
 *
 * almost all the time
 * 
*/

// counter1 code
function counterMaker() {
  let count = 0;
  return function counter() {
   return count++;
  }
}

const counter1 = counterMaker();

// counter2 code
let count = 0;

function counter2() {
  return count++;
}


/* Task 2: inning() 

Write a function called `inning` that returns a random number of points that a team scored in an inning. This should be a whole number between 0 and 2. */

function inning(num1, num2, cb){
  return cb(num1, num2);
}
const add = (num1, num2) => num1 + num2;
console.log(inning(0, 2, add));


/* Task 3: finalScore()

Write a higher order function called `finalScore` that accepts the callback function `inning` (from above) and a number of innings and and returns the final score of the game in the form of an object.

For example, 

finalScore(inning, 9) might return: 
{
  "Home": 11,
  "Away": 5,
}

*/ 
const finalScore = function(i1, i2, cb){
  return cb(i1, i2);
}

// call back functions
const homeTeam = function(i1, i2){
  return `home:${i1} final score was ${i2} `;
}

const awayTeam = function(i1, i2){
  return `away:${i1} final score was ${i2} `;
}

console.log(finalScore('inning 9', '11', homeTeam));
console.log(finalScore('inning 9', '5', awayTeam));


/* Task 4: 

Create a function called `scoreboard` that accepts the following parameters: 

(1) Callback function `getInningScore`
(2) Callback function `inning`
(3) A number of innings

and returns the score at each pont in the game, like so:
1st inning: awayTeam - homeTeam
2nd inning: awayTeam - homeTeam
3rd inning: awayTeam - homeTeam
4th inning: awayTeam - homeTeam
5th inning: awayTeam - homeTeam
6th inning: awayTeam - homeTeam
7th inning: awayTeam - homeTeam
8th inning: awayTeam - homeTeam
9th inning: awayTeam - homeTeam
Final Score: awayTeam - homeTeam */

const scoreboard = function(i1, i2, cb){
  return cb(i1, i2);}
const repeat1 = function(i1, i2){
  return `1st inning: ${i1} awayTeam ${i2} homeTeam `;}
const repeat2 = function(i1, i2){
  return `2nd inning: ${i1} awayTeam ${i2} homeTeam `;}
const repeat3 = function(i1, i2){
  return `3rd inning: ${i1} awayTeam ${i2} homeTeam `;}
const repeat4 = function(i1, i2){
  return `4th inning: ${i1} awayTeam ${i2} homeTeam `;}
const repeat5 = function(i1, i2){
  return `5th inning: ${i1} awayTeam ${i2} homeTeam `;}
const repeat6 = function(i1, i2){
  return `6th inning: ${i1} awayTeam ${i2} homeTeam `;}
const repeat7 = function(i1, i2){
  return `7th inning: ${i1} awayTeam ${i2} homeTeam `;}
const repeat8 = function(i1, i2){
  return `8th inning: ${i1} awayTeam ${i2} homeTeam `;}
const repeat9 = function(i1, i2){
  return `9th inning: ${i1} awayTeam ${i2} homeTeam `;}
const repeatFinal = function(i1, i2){
  return `Final Score: ${i1} awayTeam ${i2} homeTeam `;}
console.log(scoreboard('1 ', '2', repeat1));
console.log(scoreboard('2 ', '4', repeat2));
console.log(scoreboard('3 ', '5', repeat3));
console.log(scoreboard('6 ', '5', repeat4));
console.log(scoreboard('7 ', '7', repeat5));
console.log(scoreboard('7 ', '7', repeat6));
console.log(scoreboard('8 ', '7', repeat7));
console.log(scoreboard('9 ', '8', repeat8));
console.log(scoreboard('9 ', '8', repeat9));
console.log(scoreboard('9 ', '8', repeatFinal));


