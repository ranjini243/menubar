// write a javascript program to find the largest number.

function find_largest(arr){

    let largest_value = [0];

    if(arr.length < 2){
       return 'array contains only single value' , arr 
    }

    for(let i = 0; i<arr.length; i++){
        if (arr[i]> largest_value){
            largest_value = arr[i];
        }

    }

    return largest_value;
}
const array = [1,45,34,89,0, 90 ,67]
largest_value = find_largest(array)
console.log(largest_value);


// find second largest from an array

function second_largest(arr){
    let largest_value= [0]
    let second_largest_value = [1];

    if(arr.length <3){
        console.log('insufficient array' , arr)
    }

    for(let i = 1; i<arr.length; i++){
        if(arr[i]>largest_value){
            second_largest_value = largest_value;
            largest_value = arr[i];}
            else if (arr[i]>second_largest_value && arr[i]<largest_value){
                second_largest_value = arr[i];
            } 
        }
    

    return second_largest_value;
}

const array2 = [1,45,34,89,0, 90 ,67]
result = second_largest(array2);
console.log('second largest value' , result);

// find third largest element in an array

function third_largest(arr){

    let largest_value= [0];
    let second_largest_value= [1];
    let third_largest_value = [2];

    if (arr.length < 3){
        return 'insufficient array' , arr
    }

    for(let i = 0; i< arr.length; i++){
        if(arr[i]>largest_value){
            third_largest_value = second_largest_value;
            second_largest_value = largest_value;
            largest_value = arr[i];
        }
        else if (second_largest_value<arr[i] && arr[i]<largest_value ){
            third_largest_value = second_largest_value;
            second_largest_value = arr[i];

        }
        else if  (arr[i]>third_largest_value && arr[i]<second_largest_value){
            third_largest_value = arr[i]
        }

    }

    return third_largest_value

}

third_result = third_largest(array2);
console.log(third_result);

//find the smallest element of an array

function smallest_number(num){
    let smallest_element= []

    if(num.length<2){
        return 'insufficient array ' , num
    }

    for(let i = 0; i<num.length; i++){
        if (num[i]<smallest_element){
        smallest_element = num[i];
    }
}

return smallest_element;

}
const z = [-1 , -7 , -0 , 0 , 7 , 8];
result = smallest_number(z);
console.log(result);