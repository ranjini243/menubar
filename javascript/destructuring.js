// Destructuring: With destructuring in place, multiple variables can be assigned values in one go.
/* Destructuring is a feature in JavaScript that allows you to extract values from arrays or
 properties from objects and assign them to variables in a more concise way.*/ //introdecued in ES6 , 2015


 //example 1 Array Destructuring
 const array = [1,2,3];                  
 const [first , second , third] = array;

 console.log(first);
 console.log(second);
 console.log(third);

 //exmaple 2 Array Destructuring
const color = ['red' , 'black' , 'sky-blue' , 'brown'];
const [white , grey , pink] = color;

console.log(white);
console.log(pink);
console.log(grey);

//example 3  Object Destructuring

const person = {
    firstName: 'John',
    lastName: 'Doe',
    age: 30,
  }

// const {F , S , T} = person;  //wrong way
const { firstName: F, lastName: S, age: T } = person;             //right way {+piont}:- Renaming variables during destructuring
  
  console.log(F); 
  console.log(S);
  console.log(T);


