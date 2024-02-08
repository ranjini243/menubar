// Write a JavaScript program to compute the absolute difference between a specified number and 19. Returns triple the absolute difference if the specified number is greater than 19

function findDiff(num){
    if(num<19){
        let i = 19-num;
        return i;
    }
    else{
        let j = (num-19)*3;
        return j;
    }
}
console.log(findDiff(20));
console.log(findDiff(12));
console.log(findDiff(90));