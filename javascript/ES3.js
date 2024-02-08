// ES3 , 1999 javascript:- Regualr Expression , try/catch , Exception handling, switch case and do-while

const regularExpression = /^abc$/g;
function regEx(string){
    return regularExpression.test(string);
}

const paasString= "Regular expressions, often abbreviated as regex or regexp, were introduced in JavaScript (as well as in many other programming languages) to provide a powerful and flexible way to search, match, and manipulate text strings. Regular expressions are patterns that describe sets of strings and can be used for a variety of tasks related to text processing";
const passString2 = "RegExr was created by gskinner.com.Edit the Expression & Text to see matches. Roll over matches or the expression for details. PCRE & JavaScript flavors of RegEx are supported. Validate your expression with Tests mode."

console.log(regEx(paasString));
console.log(regEx(passString2));

//try and catch.

function tryAndCatch() {
    let a = 19;
    try {
        console.log("value of variable is:" + a);
    } catch (e) {
        console.log("Error: " + e.description);  // Fix typo here
    }
}
tryAndCatch();

//switch-case

const day = 3;
switch (day) {
    case 1:
        console.log("Monday");
        break;
    case 2:
        console.log("Tuesday");
        break;
    case 3:
        console.log("Wednesday");
        break;
    default:
        console.log("Other day");
}




