// if
const a = 24;
const b = 11;

if (a + b === b + a) {
    console.log(true);
} else {
    console.log(false);
}

// if-else if-else
if (a + b === 35) {
    console.log(true);
} else if (a + b === b + a) {
    console.log(true);
} else {
    console.log(false);
}

// switch
let grade = 'B';
let result;

switch (grade) {
    case 'A':
        result = 'Excellent Performance';
        break;
    case 'B':
        result = 'Above Average';
        break;
    case 'C':
        result = 'Average';
        break;
    case 'D':
        result = 'No Grade';
        break;
    default:
        result = 'Invalid Grade';
}

console.log(result);

//while loop 

while('raining' == true){
    
}
