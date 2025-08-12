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
