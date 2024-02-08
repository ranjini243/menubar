//Javascript strings are primitive and immutable:
//  All string methods produces a new string without altering the original string.

let text = "  ABCDEFGHIJKLMNOPQRSTUVWXYZ    ";
let length = text.length;     //for checking length of a string
console.log(length) 

//There are 4 methods for extracting string characters: at(position) , charAt(position), charCodeAt(position) and using[]

let string = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"; 
let char = string.charAt(0);  //till 25 we can check element using it's indexing
console.log(char);

let charCode = string.charCodeAt(24); //The method returns a UTF-16 code (an integer between 0 and 65535).
// console.log(charCode);

let AT = string.at(17);  //using at() this feature was introduced in March,2022 #ES2022
console.log(AT);

let usingSquareBraces = string[27]; //using [] //as i m fetching value out of index it will not throw any error but will show 'undefined' as a result..........
console.log(usingSquareBraces);

// Extracting String Parts
// There are 3 methods for extracting a part of a string:  slice(start, end), substring(start, end),substr(start, length)

let text1 = "Apple, Banana, Kiwi";
let slice = text1.slice(7 , 15);  //slice(start, end)
console.log(slice);

let substring = text1.substring(7,14);  //substring(start, end
console.log(substring)

let part = text1.substr(2,4);   //here 4 specifies the length of the extracted part.
console.log(part);

//Converting to Upper and Lower Case
let lowercase = text.toLowerCase();
console.log(lowercase);

let uppercase = lowercase.toUpperCase();
console.log(uppercase);

//JavaScript String concat():-concat() joins two or more strings:
let text3 = "Hello";
let text2 = "Buddy";
let text4 = "Welcome back: =_="
let concatString = text3.concat(" " , text2 , " " , text4);
console.log(concatString);

// note:- Strings are immutable: Strings cannot be changed, only replaced

//trim string--using trim()

let trimming = text.trim();
console.log(trimming);

//String repeat(),String replace(),String replaceAll(),String split()

const repeat = text3.repeat(2);
console.log(repeat);

const replace = text3.replace('Hello' , 'Hii');
console.log(replace);

//convert a string to an array:-

const stringToArray = text.split('|');
console.log(stringToArray);