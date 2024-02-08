// write a program to sum all the given numbers

// Using reduce //internet help||
function sum_of_all_digits(digits) {
    return digits.reduce((acc, current) => acc + current, 0);
}

const result = sum_of_all_digits([1, 2, 3, 4, 5]);
console.log(result);

// Without using any built-in function
function sum_of_all_digits(digits) {
    let total = 0;
    n = digits.length;

    for (let i = 0; i < n; i++) {
        total = total + digits[i];
    }

    return total;
}

const result1 = sum_of_all_digits([1, 2, 3, 4, 5]);
console.log(result1);
