
// Challenge 13: Sum to N
// Pseudocode:
// 1. Start the total at zero.
// 2. Loop from 1 up to n.
// 3. Add each number to the total.
// 4. Return the total.

function sumTo(n) {
    let total = 0;

    for (let i = 1; i <= n; i++) {
        total = total + i;
    }

    return total;
}

// Test cases
console.log(sumTo(5));  // 15
console.log(sumTo(10)); // 55
console.log(sumTo(0));  // 0

// Alternative solution using a formula:
// n * (n + 1) / 2
// A loop is easier to follow when learning; the formula is shorter for large n.


// Challenge 14: Prime Number Checker
// Pseudocode:
// 1. If n is less than 2, return false.
// 2. Start checking divisors from 2.
// 3. Check divisors while i * i <= n.
// 4. If n divides evenly by i, return false.
// 5. If no divisor is found, return true.

function isPrime(n) {
    if (n < 2) {
        return false;
    }

    for (let i = 2; i * i <= n; i++) {
        if (n % i === 0) {
            return false;
        }
    }

    return true;
}

// Test cases
console.log(isPrime(7));  // true
console.log(isPrime(10)); // false
console.log(isPrime(1));  // false
console.log(isPrime(2));  // true







// Challenge 15: Print a Pyramid
// Pseudocode:
// 1. Start at row 1 and continue until rows.
// 2. Calculate spaces: rows - current row.
// 3. Calculate stars: (2 * current row) - 1.
// 4. Print spaces followed by stars.

function printPyramid(rows) {
    for (let i = 1; i <= rows; i++) {
        let spaces = " ".repeat(rows - i);
        let stars = "*".repeat(2 * i - 1);

        console.log(spaces + stars);
    }
}

// Test cases
console.log("Pyramid with 4 rows:");
printPyramid(4);

console.log("Pyramid with 1 row:");
printPyramid(1);

console.log("Pyramid with 0 rows:");
printPyramid(0);




// Challenge 16: Fibonacci Numbers
// Pseudocode:
// 1. Start with the numbers 0 and 1.
// 2. Create an empty list for the sequence.
// 3. Repeat n times.
// 4. Add the current number to the list.
// 5. Calculate the next number by adding the previous two.
// 6. Update the previous numbers.
// 7. Return the sequence as a string.

function fibonacci(n) {
    let first = 0;
    let second = 1;
    let sequence = [];

    for (let i = 0; i < n; i++) {
        sequence.push(first);

        let next = first + second;
        first = second;
        second = next;
    }

    return sequence.join(", ");
}

// Test cases
console.log(fibonacci(5)); // 0, 1, 1, 2, 3
console.log(fibonacci(8)); // 0, 1, 1, 2, 3, 5, 8, 13
console.log(fibonacci(1)); // 0
console.log(fibonacci(0)); // empty string




// Challenge 17: Guessing Game Simulator
// Pseudocode:
// 1. Set the lowest number to 1 and the highest to 100.
// 2. Set the guess count to zero.
// 3. While the lowest number is not greater than the highest:
//    a. Guess the middle number.
//    b. Increase the guess count.
//    c. Print the guess.
//    d. If the guess matches the secret, return the count.
//    e. If the guess is too low, move the lowest number up.
//    f. Otherwise, move the highest number down.

function guessingGameSimulator(secret) {
    let low = 1;
    let high = 100;
    let count = 0;

    while (low <= high) {
        const guess = Math.floor((low + high) / 2);
        count++;

        console.log("Guess:", guess);

        if (guess === secret) {
            console.log("Found the secret number!");
            return count;
        } else if (guess < secret) {
            low = guess + 1;
        } else {
            high = guess - 1;
        }
    }

    return -1;
}

// Test cases
console.log("Secret 73 — guesses:", guessingGameSimulator(73));
console.log("Secret 1 — guesses:", guessingGameSimulator(1));
console.log("Secret 100 — guesses:", guessingGameSimulator(100));

