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
