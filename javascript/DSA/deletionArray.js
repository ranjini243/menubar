// Deletion: Deleting element from the array.

// using splice , pop and shift method

const array = [1,2,3,4,5];
// array.splice(2,3);
// array.pop();
// array.shift();
// delete array[2];       //output---[ 1, 2, <1 empty item>, 4, 5 ]
// console.log(array);

function deleteElement(){
    const arr = [1,2,3,45];
    newArray= []
    DDE= 2

    for(let i=0; i<arr.length; i++){
        if(i !== DDE){
            newArray.push(arr[i]);
        }
    }
    return newArray;
}
result = deleteElement();
console.log(result);