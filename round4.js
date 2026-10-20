
 // Challenge 18: Password Validator

// Pseudocode:
// 1. Create an empty errors array.
// 2. Check if the password has at least 8 characters.
// 3. Check for an uppercase letter.
// 4. Check for a lowercase letter.
// 5. Check for a number.
// 6. Check for a special character.
// 7. Check that the password has no spaces.
// 8. Return true if there are no errors.

function validatePassword(pw) {
    const errors = [];

    if (pw.length < 8) {
        errors.push("Password must have at least 8 characters.");
    }

    if (!/[A-Z]/.test(pw)) {
        errors.push("Password needs an uppercase letter.");
    }

    if (!/[a-z]/.test(pw)) {
        errors.push("Password needs a lowercase letter.");
    }

    if (!/[0-9]/.test(pw)) {
        errors.push("Password needs a number.");
    }

    if (!/[!@#$%^&*]/.test(pw)) {
        errors.push("Password needs a special character.");
    }

    if (/\s/.test(pw)) {
        errors.push("Password must not contain spaces.");
    }

    return {
        valid: errors.length === 0,
        errors: errors
    };
}

// Tests
console.log(validatePassword("Hello123!"));
console.log(validatePassword("hello"));
console.log(validatePassword("Hello 123!"));
console.log(validatePassword(""));












 // Challenge 19: Roman Numeral Converter

// Pseudocode:
// 1. Check that the number is between 1 and 3999.
// 2. Create lists of values and Roman symbols.
// 3. Start from the largest value.
// 4. While the number is greater than or equal to that value,
//    add its symbol and subtract its value.
// 5. Return the Roman numeral.

function romanNumeral(n) {
    if (!Number.isInteger(n) || n < 1 || n > 3999) {
        return "Invalid number";
    }

    const values = [
        1000, 900, 500, 400, 100, 90,
        50, 40, 10, 9, 5, 4, 1
    ];

    const symbols = [
        "M", "CM", "D", "CD", "C", "XC",
        "L", "XL", "X", "IX", "V", "IV", "I"
    ];

    let result = "";

    for (let i = 0; i < values.length; i++) {
        while (n >= values[i]) {
            result += symbols[i];
            n -= values[i];
        }
    }

    return result;
}

// Tests
console.log(romanNumeral(14));   // XIV
console.log(romanNumeral(2026)); // MMXXVI
console.log(romanNumeral(3999)); // MMMCMXCIX
console.log(romanNumeral(0));    // Invalid number






 
 // Challenge 20: Rwanda National ID Validator

// Pseudocode:
// 1. Check that the ID has exactly 16 digits.
// 2. Check that the first digit is 1.
// 3. Get the birth year from digits 2 to 5.
// 4. Check that the birth year is between 1900 and 2026.
// 5. Check that the sixth digit is 7 or 8.
// 6. Return true if all checks pass.
// 7. Otherwise, return a message explaining the first error.

function nationalIdCheck(id) {
    // Check that the ID contains exactly 16 digits
    if (!/^\d{16}$/.test(id)) {
        return "Invalid: ID must contain exactly 16 digits.";
    }

    // Check the first digit
    if (id[0] !== "1") {
        return "Invalid: ID must start with 1.";
    }

    // Extract the birth year
    const birthYear = Number(id.substring(1, 5));

    // Check the birth year
    if (birthYear < 1900 || birthYear > 2026) {
        return "Invalid: Birth year must be between 1900 and 2026.";
    }

    // Check the sixth digit
    if (id[5] !== "7" && id[5] !== "8") {
        return "Invalid: The sixth digit must be 7 or 8.";
    }

    // All checks passed
    return true;
}

// Test 1: Valid according to our simplified rules
console.log(nationalIdCheck("1199871234567890"));

// Test 2: ID is too short
console.log(nationalIdCheck("12345"));

// Test 3: Does not start with 1
console.log(nationalIdCheck("2199871234567890"));

// Test 4: Sixth digit is not 7 or 8
console.log(nationalIdCheck("1199851234567890"));



