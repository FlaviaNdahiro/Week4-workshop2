// Challenge 1: Leap Year
// Pseudocode:
// 1. If the year is divisible by 400, it is a leap year.
// 2. Otherwise, if divisible by 100, it is not a leap year.
// 3. Otherwise, if divisible by 4, it is a leap year.
// 4. Otherwise, it is not a leap year.

function isLeapYear(year) {
    if (year % 400 === 0) {
        return true;
    } else if (year % 100 === 0) {
        return false;
    } else if (year % 4 === 0) {
        return true;
    } else {
        return false;
    }
}

// Test cases
console.log(isLeapYear(2024)); // true
console.log(isLeapYear(1900)); // false
console.log(isLeapYear(2000)); // true