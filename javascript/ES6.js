//ES6 or ECMAScript 2015 is the 6th version of the ECMAScript programming language.
// const AND let introduced first time in ES6

//const 
const example = 'Ranjini'     //immutable
console.log(example);

//let
let example2 = 'Ranjani';
console.log(example2);

//Arrow function
const test = () => {
    console.log("Arrow function  {()=>} are anonymous functions i.e. functions without a name but they are often assigned to any variable.")
}
test()

//template literals :- by using it we can variables with string no need to use '+' operator
var name = 'Vindhya Pratap Singh'
console.log('here i m printing values without using template literals:')
console.log(`Hey Buddy, ${name}`)  // using template literals `${}` 

//object and destructing
// go to javascript\destructuring.js

//Default parameters
const DP = (a , b=1)=>{
    return a+b;
}
console.log(DP(2,4));
console.log(DP(2));   //by default b=1 

//CLASSES
class className{
    constructor(fit , unfit){
        this.fit = fit;
        this.unfit = unfit;
    }
}

const trail1 = new className('Ranjini' , 'Gupta');
const trail2 = new className('Muskan');

console.log(trail1.fit, trail1.unfit);
console.log(trail2.fit);

//example2 

class ABES{
    constructor(sectionB , sectionC){
        this.sectionB = sectionB;
        this.sectionC = sectionC;
    }
}

const value1 = new ABES('Excellent' , 'Above average');
const value2 = new ABES('Entertainment','WalkieTalkie');

console.log(value1.sectionB , value1.sectionC);



