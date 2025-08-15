let firstname = "John";
firstname = "James";

//let, var, const
let firstName = "Excellence";
var Firstname = "Oseobulu";
const pi = 3.14159;

/*Scope*/
let words = 3;
{
  let wrds = 4;
}
/*console.log(wrds); // Error: Uncaught ReferenceError ReferenceError: wrds is not defined. Didn't work. Let has a block scope */

let word = 3;
{
  let word_1 = 3;
  console.log(word_1); // ---> 3
}
console.log(word);

var number = 1;
{
  var num_1 = 2;
}
console.log(num_1); // ---> 2; It worked. var has a global scope


const num = 2;
/*num = 3; // --> Error: Uncaught TypeError TypeError: Assignment to constant variable*/

/*Primitive Datatypes*/
//String
let name = "John";
let name_2 = 'Dan';

let language = "Javascript";
console.log(`I'm learning ${language}`);

let otherName = "Hello, my name is \"Mike\"";

let othername = 'Hello, it\'s me, Goku';

let Othername = 'Where are you? \n Are you not coming? \n Come quickly';
console.log(otherName);
console.log(othername);
console.log(Othername);


//Numbers
let int = 1234;
let flnt = 12.34;
let expnrt = 12e4;
let bint = 0b101;
let hexnt = 0x827;
let octnt = 0o777;
let negnt = -123;
console.log(int);
console.log(flnt); 
console.log(expnrt); // ---> 120000
console.log(bint); // ---> 5
console.log(hexnt); // ---> 2087
console.log(octnt); // ---> 511
console.log(negnt); 

//Bigint
let bigint = 12n;
console.log(bigint);

let sum = int + name_2;
/*console.log(sum); */// ---> Error: Uncaught TypeError TypeError: Cannot mix BigInt and other types, use explicit conversions


//Boolean
let bool1 = true;
let bool2 = false;

let str1 = "Javascript is fun!";
let str2 = "Javascript is fun!";
console.log("They are the same: ", str1 === str2); // ---> True

let sym1 = Symbol("Javascript is fun!");
let sym2 = Symbol("Javascript is fun!");
console.log("They are the same: ", sym1 === sym2); // ---> False

//Undefined
let color;
console.log(color);

let color1;
console.log(color === color1);

//TypeOf
let string = "Excel";
let num_ber = 1;
let big_int = 123n;
let bool = true;
let sym = Symbol("unique");
let unassign = undefined;
let empty = null;

console.log(`${string} is a type of ${typeof string}`);
console.log(`${number} is a type of ${typeof num_ber}`);
console.log(`${big_int} is a type of ${typeof big_int}`);
console.log(`${bool} is a type of ${typeof bool}`);
console.log(sym, "is a type of", typeof sym);
console.log(`${unassign} is a type of ${typeof unassign}`);
console.log(`${empty} is a type of ${typeof empty}`);

let nr1 = "false";
nr1 = Boolean(nr1);
console.log(nr1);


let str_1 = 'Laurence'; 
let str_2 = "Svekis"; 
let val1 = undefined;
let val2 = null;
let myNum = 1000;
console.log(str_1, "is a type of", typeof str1);
console.log(str_2, "is a type of", typeof str_2);
console.log(val1, "is a type of", typeof val1);
console.log(val2, "is a type of", typeof val2); 
console.log(myNum, "is a type of", typeof myNum);

let myName = "Excellence";
let myAge = 2;
let canWriteJavascript = true;
console.log(`Hello, my name is ${myName}, i am ${myAge} years old and i can write Javascript code: ${canWriteJavascript}.`);

//Unary operators: increment and decrement
let num1 = 1;
num1++;
console.log(num1); // ---> 2

let num11 = 2;
num11--;
console.log(num11); // ---> 1

let nr_1 = 4;
let nr2 = 5;
let nr3 = 2;
console.log(nr_1++ + ++nr2 * nr3++); // ---> 16;

/* Practice exercise 2.3
Write some code to calculate the hypotenuse of a triangle using the Pythagorean 
theorem when given the values of the other two sides. The theorem specifies that the 
relation between the sides of a right-angled triangle is a2
 + b2
 = c2
*/

let a1 = window.prompt("Value 1?");
let b1 = window.prompt("Value 2?");
a1 = Number(a1);
b1 = Number(b1);
let hypotenuseVal = ((a1 * a1) + (b1 * b1))**0.5;
console.log(hypotenuseVal);

let a = 2;
let b = 4;
let c = 6;
a += b; // --> 6
a /= c; // --> 1
c %= b; // --> 2

console.log(a);
console.log(b);
console.log(c); // -->  2

let x = 5;
let y = "5";
console.log(x == y); // --> True
console.log(x === y); // --> False
console.log(x != y); // False
console.log(x !== y); // True

let m = 5;
let n = 6;
console.log(n > m); // True
console.log(m > n); // False
console.log(m > m); // False
console.log(n >= n); // True

console.log(n < m); // False
console.log(m < n); // True
console.log(n <= n); // True

//Logical operators
let r = 2;
let s = 4;
let t = 6;

//And
console.log(r < s && s < t); // ---> True 
console.log(r > s && t < r); // False

//Or
console.log( r < s || s > t) // --> True 
console.log(r > s || s > t) // --> False

//Not
console.log(!(s < t)); // --> False
console.log(!(s > t)); // True


/*Miles-to-kilometers converter
Create a variable that contains a value in miles, convert it to kilometers, and log the 
value in kilometers in the following format: 
The distance of 130 kms is equal to 209.2142 miles*/

let valueInMiles = 100;
let Converter = valueInMiles * 1.60934;
console.log(`The distance of ${Converter} is equal to ${valueInMiles}.`);

/*
BMI calculator
Set values for height in inches and weight in pounds, then convert the values to 
centimeters and kilos, outputting the results to the console:
• 1 inch is equal to 2.54 cm
• 2.2046 pounds is equal to 1 kilo
Output the results. Then, calculate and log the BMI: this is equal to weight (in kilos) 
divided by squared height (in meters). Output the results to the console.*/

let heightInInches = 10;
let weightInPounds = 60;
let heightInCM = heightInInches * 2.54;
let weightInKilo = weightInPounds * 2.2046;
console.log(`${heightInInches} inches is equal to ${heightInCM} cm`);
console.log(`${weightInPounds} pounds is equal to ${weightInKilo} kilo`);
let BMI = weightInKilo/(heightInCM/100*heightInCM/100);
console.log(BMI);

