
// Challenge 6: Reverse a String
// Pseudocode:
// 1. Create an empty string.
// 2. Start from the last character of the input.
// 3. Move backward through the string.
// 4. Add each character to the new string.
// 5. Return the new string.

function reverseString(str) {
    let reversed = "";

    for (let i = str.length - 1; i >= 0; i--) {
        reversed = reversed + str[i];
    }

    return reversed;
}

// Test cases
console.log(reverseString("hello"));  // olleh
console.log(reverseString("Flavia")); // aivalF
console.log(reverseString(""));       // empty string




// Challenge 7: Count a Character
// Pseudocode:
// 1. Set the count to zero.
// 2. Convert the string and target character to lowercase.
// 3. Loop through every character in the string.
// 4. If a character matches the target, increase the count.
// 5. Return the count.

function countChar(str, char) {
    let count = 0;
    const text = str.toLowerCase();
    const target = char.toLowerCase();

    for (let i = 0; i < text.length; i++) {
        if (text[i] === target) {
            count++;
        }
    }

    return count;
}

// Test cases
console.log(countChar("Banana", "a")); // 3
console.log(countChar("Hello", "L"));  // 2
console.log(countChar("Flavia", "z")); // 0









// Challenge 8: Palindrome Checker
// Pseudocode:
// 1. Convert the string to lowercase.
// 2. Remove spaces and punctuation.
// 3. Reverse the cleaned string using a loop.
// 4. Compare the cleaned string with its reverse.
// 5. Return true if they match, otherwise return false.

function isPalindrome(str) {
    const cleaned = str.toLowerCase().replace(/[^a-z0-9]/g, "");
    let reversed = "";

    for (let i = cleaned.length - 1; i >= 0; i--) {
        reversed += cleaned[i];
    }

    return cleaned === reversed;
}

// Test cases
console.log(isPalindrome("madam"));             // true
console.log(isPalindrome("hello"));             // false
console.log(isPalindrome("Never odd or even")); // true



// Challenge 9: Title Case
// Pseudocode:
// 1. Convert the sentence to lowercase.
// 2. Split the sentence into words.
// 3. Create an empty result string.
// 4. Loop through each word.
// 5. Capitalize the first letter of each word.
// 6. Join the words and return the result.

function titleCase(str) {
    const words = str.toLowerCase().split(" ");
    let result = [];

    for (let i = 0; i < words.length; i++) {
        if (words[i].length > 0) {
            result.push(
                words[i][0].toUpperCase() + words[i].slice(1)
            );
        } else {
            result.push("");
        }
    }

    return result.join(" ");
}

// Test cases
console.log(titleCase("welcome to kigali tech hub"));
console.log(titleCase("HELLO WORLD"));
console.log(titleCase("flavia"));






// Challenge 10: Mask a Phone Number
// Pseudocode:
// 1. Check if the phone number has exactly 10 digits.
// 2. Check if it starts with "07".
// 3. If invalid, return "Invalid phone number".
// 4. Keep the first 3 digits.
// 5. Replace the next 4 digits with ****.
// 6. Keep the last 3 digits and return the result.

function maskPhone(phone) {
    if (!/^07\d{8}$/.test(phone)) {
        return "Invalid phone number";
    }

    return phone.slice(0, 3) + "****" + phone.slice(-3);
}

// Test cases
console.log(maskPhone("0788123456")); // 078****456
console.log(maskPhone("0721234567")); // 072****567
console.log(maskPhone("12345"));     // Invalid phone number






// Challenge 11: Longest Word
// Pseudocode:
// 1. Split the sentence into words.
// 2. Set the first word as the longest word.
// 3. Loop through the remaining words.
// 4. If a word is longer, update the longest word.
// 5. Return the longest word.
// 6. If two words have the same length, keep the first one.

function longestWord(sentence) {
    const words = sentence.trim().split(/\s+/);
    let longest = "";

    for (let i = 0; i < words.length; i++) {
        if (words[i].length > longest.length) {
            longest = words[i];
        }
    }

    return longest;
}

// Test cases
console.log(longestWord("I love programming")); // programming
console.log(longestWord("Kigali is beautiful")); // beautiful
console.log(longestWord("cat dog")); // cat



// Challenge 12: String Compression
// Pseudocode:
// 1. If the string is empty, return an empty string.
// 2. Start with the first character and a count of 1.
// 3. Loop through the remaining characters.
// 4. If the current character matches the previous one, increase the count.
// 5. Otherwise, add the previous character and its count to the result.
// 6. Reset the count to 1.
// 7. Add the final character and its count.
// 8. Return the result.

function compress(str) {
    if (str.length === 0) {
        return "";
    }

    let result = "";
    let count = 1;

    for (let i = 1; i < str.length; i++) {
        if (str[i] === str[i - 1]) {
            count++;
        } else {
            result += str[i - 1] + count;
            count = 1;
        }
    }

    result += str[str.length - 1] + count;

    return result;
}

// Test cases
console.log(compress("aaabccdddd")); // a3b1c2d4
console.log(compress("hello"));      // h1e1l2o1
console.log(compress(""));           // empty string
