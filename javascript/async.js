// async and await funcction.

// async function name(){
//     return new Promise((resolve , reject) => {
//         setTimeout (()=>{
//             const data = "data from new function";
//             resolve(data);
//         },1000);
//     })
// }

// // let result = name();
// // console.log(result);

// async function main(){
//     const dat = await getData();
//     console.log(dat);
// }

// main()

// Define an asynchronous function named 'name'
async function name() {
    // Return a Promise that resolves after a delay
    return new Promise((resolve, reject) => {
        // Execute a function after a timeout of 1000 milliseconds (1 second)
        setTimeout(() => {
            // Define a constant variable 'data' with a string value
            const data = "data from new function";
            // Resolve the Promise with the 'data' value
            resolve(data);
        }, 1000);
    });
}

// Define an asynchronous function named 'main'
async function main() {
    // Await the resolution of the Promise returned by the 'name' function
    const dat = await name();
    // Log the resolved value to the console
    console.log(dat);
}

// Call the 'main' function to initiate the asynchronous operation
main();

