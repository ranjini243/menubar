function second_largest(arr){
    let largest_value= [0]
    let second_largest_value = [1];
    
    if(arr.length <2){
        console.log('insufficient array');
    }

    for(let i=0; i<arr.length; i++){
        if(arr[i]>largest_value){
            second_largest_value = largest_value;
        }
    }
}

const array2 = [1,45,34,89,0, 90 ,67];
result = second_largest(array2);
console.log('second largest value' , result);