// 19. Write a JavaScript program to check whether a given integer is within 20 of 100 or 400.  

function numberLies(num){
    if((100-num)<=20 || (100-num)<=20){
        return "given integer is within 20 of 100 or 400";
    }
    else{
        return "given integer is not within 20 of 100 or 400";

    }
}

console.log(numberLies(4)); 
console.log(numberLies(80)); 
console.log(numberLies(380)); 
console.log(numberLies(110));