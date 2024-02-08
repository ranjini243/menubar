function factorial(n){
    if(n == 0){
        return 1;
    }

    else{
        return factorial(n-1)*n;
    }
}

factorial_num = factorial(5);
console.log(factorial_num);
