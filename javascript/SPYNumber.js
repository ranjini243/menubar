function findSpy (number ){

    let sum = 0;
    let product = 1;

    if (number === 0){
        sum = 0;
        product = 0;
    }else{
        if(number<10){
            return false;
        }
        while(number>0){
            let snum = number%10;
            sum +=snum;
            product *=snum;
            number = Math.floor(number/10)
        }
    }
     
    return sum == product;

}

for(let i =0; i<= 500 ; i++){
    if(findSpy(i)){
        console.log(i)
    }
}