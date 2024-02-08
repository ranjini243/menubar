// GCD Formula: GCD(a,b)=GCD(b,amodb) This formula is based on the Euclidean algorithm.

//write a function to find Greatest common divisior GCD of two numbers.

function GCD(a,b){
    if(b != 0){
        let temp = b;
        b = a%b;
        a = temp;
    }

    return Math.abs(a);
}

const num1 = 50;
const num2 = 75;

result = GCD(num1 , num2);
console.log("Greatest common divisior GCD of two numbers" , result)

//write a function to find lcm o9f two numbers. LCM(a,b)= GCD(a,b)/∣a⋅b∣
​
 

function LCM(a , b){
    return Math.abs((a*b)/GCD(a,b));
}


const num3 = 50;
const num4 = 75;

result1 = LCM(num3 , num4);
console.log("LCM of two numbers" , result1)