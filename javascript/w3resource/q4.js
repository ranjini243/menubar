// 18. Write a JavaScript program to check a pair of numbers and return true if one of the numbers is 50 or if their sum is 50.

function R(a,b){
    temp = []
    if((a || b )== 50){
        return "one of the numbers is 50 or if their sum is 50" ,true;
    }
    else if ((a+b)== 50){
        return "one of the numbers is 50 or if their sum is 50" , true;
    }
    else{
        return "not the numbers nor their sum is 50", false;
    }
}

console.log(R(48,2));
console.log(R(50,20));
console.log(R(38,24));
console.log(R(30,20));