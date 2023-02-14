// this  two example are variables, declared with var and let keyword:
var x = 5;
var y = 5;
var z = x+y;
console.log(z);

let X = 8;
let Y = 7;
let Z = X+Y;
console.log(Z);

// this example is variable undeclared:
a = 2;
b = 4;
c = a+b;
console.log(c);
// If you want a general rule: always declare variables with const.
const num1 = 10;
const num2 = 20;
 var total = num1+num2;
console.log(total);

 
var price1 = 10;
var price2 = 15;
totalPrice = price1 + price2;
console.log(totalPrice);

const id = 199;
let person = "nikitha";
let answer = "yes i am !";
console.log(id + "<br>" + answer + "<br>" + person);
// "declaring" a variable has no value and
// You can also assign a value to the variable when you declare it:

var dogName;
dogName = "labrador dog";
console.log(dogName);

// One Statement, Many Variables:
// You can declare many variables in one statement.
// Start the statement with let and separate the variables by (comma):

var catName = "bingo", age = "10day", money = 1000;
console.log(catName);

// If you put a number in quotes, the rest of the numbers will be treated as strings, and concatenated.
var n = 3 + 5 + "8";
console.log(n);