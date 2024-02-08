function armstrong(a , b , c){
    const abc = a*100 + b*10 + c;  //1*100+5*10+3 = 153
    const isArmstrong = a**3+b**3+c**3;

    if(abc === isArmstrong){
        return true;
    }

    else{
        return false;
    }

}

const num1 = 1;
const num2 = 5;
const num3 = 3;

result = armstrong(num1 , num2 , num3);
console.log(result)