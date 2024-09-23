// Insertion: Inserting a new element in an array.

const array = [1,2,3,4,5];   //add elements at end
array.push(24);
console.log(array);

// using unshift method.  add elements at starting

const arr = [12,13,14,15];
arr.unshift(24 , 11 , 99);
console.log(arr);

// using splice method
// array.splice(start, deleteCount, item1, item2, ...) syntax of splice.

const element = [24,11,99,98,100];
element.splice(2);           //will remove each element from strting index 2.
console.log(element);        //output-[ 24, 11 ] 

// using array concatination,

const element1 = [24,11,99,98,100];
const newElement1 =element1.concat(100);
console.log(newElement1);


// without using any built-in methods

function insertElement(){
    const arrData = [7,8 , 9,10];
    for(let i =arrData.length-1; i--;){
        arrData[0] = 122;
        console.log(arrData[i]);
    }
}
insertElement()