// Traversal: Traverse through the elements of an array.
// using built-in methods

// 1- using for each

const array = [1,2,3,4,5,6];

array.forEach(element =>{
    console.log(element)
});

// 2- using for....of loop

for(const e of array){
    console.log(e)
}

// using map()

array.map(element => {
    console.log(element)
})

// without using built-in methods

for(let i = 0; i<array.length; i++){
    console.log(array[i])
}

// using while loop

const array1 = [1,2,3,4,5];
let i = 0;

while(i<array1.length){
    console.log(array1[i]);
    i++ ;
}