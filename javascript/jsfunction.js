function f1(arr1 , arr2){
    let isIncludes = arr1.includes('fig')
    console.log(isIncludes)

    let findPosition = arr2.indexOf('date')
    console.log('finding index of date by using indexOf method using function',findPosition)

}
const array1=['apple','banana','carrot','date','egg','fig','grapes']
const array2=['apple','banana','carrot','date','egg','fig','grapes']
f1(array1 , array2)
 

//arrow function
const f2 = (arr1,arr2)=> { 
    let isIncludes = arr1.includes('fig')
    console.log(isIncludes)

    let findPosition = arr2.indexOf ('date')
    console.log('finding index of date by using indexOf method and using arrow function',findPosition) 
}

const arr1=['apple','banana','carrot','date','egg','fig','grapes']
const arr2=['apple','banana','carrot','date','egg','fig','grapes']
f2(array1 , array2)

//write a function to find a number in an array

const search = [1,34,56,24,68,89]
let letmeSearch = search.find(passFunction)
console.log('number greater that 34 using find() method',letmeSearch)

function passFunction(num){
    return num > 34;
}

passFunction(search)

// find index of an array

function findIndex(){
    
}