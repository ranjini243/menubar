// function spyNumber(){
//     const number = document.getElementById("number input").value;

//     const digit = number.toString().split().map(Number);

//     const sum = digit.reduce((a,b) => a+b, 0);
//     const product = digit.reduce((a,b) => a*b , 1);
    
//     if (sum === product){
//         document.getElementById("result").textContent  = `${number} is a spy number:`;
//     } else{
//         document.getElementById("result").textContent = `${number} is not a spy number:`
//     }
// }

// let final = spyNumber();
// console.log(final);


// script.js\ 

function checkSpyNumber() { 
	const numberInput = 
		document.getElementById("numberInput").value; 

	const digits = 
		numberInput.toString().split("").map(Number); 
	const sum = 
		digits.reduce((a, b) => a + b, 0); 
	const product = 
		digits.reduce((a, b) => a * b, 1); 

	if (sum === product) { 
		document.getElementById( 
			"result"
		).textContent = `${numberInput} is a Spy Number!`; 
	} else { 
		document.getElementById( 
			"result"
		).textContent = `${numberInput} is not a Spy Number.`; 
	} 
}
