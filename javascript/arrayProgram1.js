function f1(arr1 , arr2){
    let isIncludes = arr1.includes('fig')
    console.log(isIncludes)

    let findPosition = arr2.indexOf('date')
    console.log(findPosition)

}
const array1=['apple','banana','carrot','date','egg','fig','grapes']
const array2=['apple','banana','carrot','date','egg','fig','grapes']
f1(array1 , array2)

const f2 = (arr1,arr2)=> {
    let isIncludes = arr1.includes('fig')
    console.log(isIncludes)

    let findPosition = arr2.indexOf('date')
    console.log(findPosition) 
}

const array11=['apple','banana','carrot','date','egg','fig','grapes']
const array21=['apple','banana','carrot','date','egg','fig','grapes']
f2(array1 , array2)

//write a function to find a number in an array

const search = [1,34,56,24,68,89]
let letmeSearch = search.find(passFunction)
console.log(letmeSearch)

function passFunction(num){
    return num > 34;
}

passFunction(search)

//find index of an array

function findIndex(){
    
}