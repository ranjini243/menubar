//write a function to concat(merge) , reverse(with palindrome) , search,Count Occurrences of a Character, Replace Substring

function concatString(str1 , str2){
    let merged = '';
    for(let i = 0; i<str1.length ; i++){
        merged = merged+str1[i];
    }

    for(let i = 0; i<str2.length ; i++){
        merged = merged+str2[i];
    }

    return merged;
}
let str1 = 'Excellent Performance';
let str2 = 'Above Average';
const result = concatString(str1 , str2)
console.log(result);

// reverse the string and check for palindrome also..

function reverseString(string){
    let temp = '';
    for(let i = string.length-1; i>=0; i--){
        temp = temp + string[i];
        
    }
    // check palindrome
    if(temp === string){
        return true;
    }
    else{
        return false;
    }

    return temp;
}

const result2 = reverseString("javascript");
console.log(result2);

//find substring

function checkSubString(string , targetString){
    for(let i = string.length; i +=1;){
        
    }
}
