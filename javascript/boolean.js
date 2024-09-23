function test(a ,b){
    a = Math.random();
    b = Math.random();

    if(a===b){
        return true , a;
    }else{
        return false , b;
    }
    

}
result = test();
console.log(result);