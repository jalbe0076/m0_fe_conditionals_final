// In the exercises below, write your own code where indicated
// to achieve the desired result.

// One example is already completed. Your task is to complete
// any remaining prompt.

// Make sure to run the file in your command line using `node <filename>.js`


// -------------------
// PART 1: Comparing variables
// -------------------

var numberTeachers = 4
var numberStudents = 20
var stringTeachers = "4"
var numberDogs = 0

// EXAMPLE: log the result of the comparison: is numberTeachers greater than numberStudents?
console.log("Is numberTeachers greater than numberStudents?", numberTeachers > numberStudents);
// this should log: "Is numberTeachers greater than numberStudents?" false

// YOU DO: log the result of the comparison: is numberTeachers less than numberStudents?
// this should log: true
console.log("Is numberTeachers less than numberStudents?", numberTeachers < numberStudents);
// YOU DO: log the result of the comparison: is numberTeachers strictly equal to stringTeachers?
// this should log: false
console.log("Is numberTeachers strictly equal to stringTeachers?", numberTeachers === stringTeachers);
// YOU DO: log the result of the comparison: is numberTeachers not equal to numberStudents?
// this should log: true
console.log("Is numberTeachers not equal to numberStudents?", numberTeachers !== numberStudents);
// YOU DO: log the result of the comparison: is numberStudents greater than or equal to 20?
// this should log: true
console.log("Is numberStudents greater than or equal to 20?", numberStudents >= 20);
// YOU DO: log the result of the comparison: is numberStudents greater than or equal to 21?
// this should log: false
console.log("Is numberStudents greater than or equal to 21?", numberStudents >= 21);
// YOU DO: log the result of the comparison: is numberStudents less than or equal to 20?
// this should log: true
console.log("Is numberStudents less than or equal to 20?", numberStudents <= 20);
// YOU DO: log the result of the comparison: is numberStudents less than or equal to 21?
// this should log: true
console.log("Is numberStudents less than or equal to 21?", numberStudents <= 21);

// #-------------------
// PART 2: Articulating what you are doing
// #-------------------

// For the following prompts, you will be given a line of code and your task is to type out a Comment,
// in English, explaining what that line of code is doing, including what the comparison will evaluate to.
// Be as technically precise as possible, but don't just copy and paste a definition from the readings.
// Make sure YOU can explain it that way!

console.log(4 < 9);
// YOU DO: Explain.
//This is confirming if the number 4 is smaller than the number 9. It will log out the value true
var books = 3;
console.log(4 < books);
// YOU DO: Explain.
//This code defines a variable called books and assigns it the numerical value of 3. It then confirms if the number 4 is smaller than the variable books and logs that value to the console. The expected value in this case is false.
var friends = 6;
var siblings = 2;
console.log(friends > siblings);
// YOU DO: Explain.
//This code defines a variable called friends and assigns it the numerical value of 6 and another called siblings and assigns it the numerical value of 2. It then confirms if friends is greater than than the siblings and logs that value to the console. The expected value in this case is true.
var attendees = 9;
var meals = 8;
console.log(attendees !== meals);
// YOU DO: Explain.
//This code defines a variable called attendees and assigns it the value of 9 and another called meals and assigns it the numerical value of 8. It then confirms if attendees is not equal to meals and logs that value to the console. The expected value in this case is true.

// #-------------------
// PART 3: Logical Operators
// #-------------------

var isHungry = true;
var finishedHomework = false;

// EXAMPLE:
// Determine if the user is hungry and has completed their homework
console.log(isHungry && finishedHomework);
// Determine if the user is hungry or has completed their homework
console.log(isHungry || finishedHomework);

var lovesToPlay = true;
var lovesDogPark = false;
var lovesTreats = true;
var age = 1;

// YOU DO:
// Determine if the dog loves to play and loves treats
console.log("Does the dog love to play and loves treats?", lovesToPlay && lovesTreats);

// Determine if the dog loves to play and loves the dog park
console.log("Does the dog love to play and loves the dog park?", lovesToPlay && lovesDogPark);

// Determine if the dog loves to play or loves the dog park
console.log("Does the dog love to play or loves the dog park?", lovesToPlay || lovesDogPark);

// Determine if the dog loves to play and is a puppy
console.log("Does the dog love to play and is a pupy?", lovesToPlay && age);
// What did your final line of code evaluate to? Why do you think that is? Explain.
// ANSWER: The final line of code evaluated to 1. I believe this is the case because a logic operator starts evaluating the code from right to left. Because the logic operator value `&&` was used and because the first value of `lovesToPlay` was true, it then moves on to the next variable called `age`. Because `age` is a numerical value it will display it. 