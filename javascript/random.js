const num = 98;
let b = Math.random();   //always retuns number less tha 1 
console.log(b)

let c = Math.floor(Math.random()*10);
console.log(c);

function random(min , max){
    return Math.floor(Math.random()* (max-min)+min);
}

let result = random(10 , 5);
console.log(result);