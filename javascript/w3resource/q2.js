// Write a JavaScript program to check two given integers whether one is positive and another one is negative.

function findPositive(num1){
    let tempPositive = [];
    let tempNegative = [];
    for(let i= 0; i<num1.length; i++){
        if (num1[i]>=0){
            tempPositive==(num1[i])
            console.log("postive value" , num1[i])
        }

        else{
            tempNegative ==num1[i];
            console.log("value is negative" , num1[i])
        }
    }
    return tempPositive , tempNegative;

}

const numbers = [1,0,9,-7,-6];
result = findPositive(numbers);
console.log(result);