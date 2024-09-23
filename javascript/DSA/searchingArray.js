// Searching:  Search for an element in the array.

// using indexof , includes , we can search any element in an array

const array = [1,2,3,4,5,67,34,24,54];
// console.log(array.indexOf(24));
// console.log(array.includes(24));

const elementToSearch = 24;
let i = 0;
while(i < array.length){
    if(array[i]===elementToSearch){
        console.log("success");
        break;
    }
    i++;
}
