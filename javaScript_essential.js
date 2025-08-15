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