// in const 
// can NOT:

// Reassign a constant value
// Reassign a constant array
// Reassign a constant object

// But you CAN:
// Change the elements of constant array
// Change the properties of constant object

const object = {
    "employee" : {  
        "name":       "sonoo",   
        "salary":      56000,   
        "married":    true  
    }
}

object.employee.newProperty = '90000'; //add new element to the object
object.employee.salary = '90000'      // update the value of salary

console.log(object);

// block-scoped

function blockScoped(b){
    let example = 'ram';
    console.log('i m block-scopeed' , example , b , a)
    return example;
}

const a = 'aam'
blockScoped(a)
console.log('i m block-scopeed' , a)

