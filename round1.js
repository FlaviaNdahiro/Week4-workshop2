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




 // Challenge 2: BMI Category
// Pseudocode:
// 1. Check if height is 0 or less.
// 2. Calculate BMI = weight / (height * height).
// 3. If BMI < 18.5, return Underweight.
// 4. If BMI < 25, return Normal.
// 5. If BMI < 30, return Overweight.
// 6. Otherwise, return Obese.

function getBMICategory(weightKg, heightM) {
    if (heightM <= 0) {
        return "Invalid height";
    }

    const bmi = weightKg / (heightM * heightM);

    if (bmi < 18.5) {
        return "Underweight";
    } else if (bmi < 25) {
        return "Normal";
    } else if (bmi < 30) {
        return "Overweight";
    } else {
        return "Obese";
    }
}

// Test cases
console.log(getBMICategory(50, 1.7));
console.log(getBMICategory(65, 1.7));
console.log(getBMICategory(90, 1.7));
console.log(getBMICategory(60, 0));




 // Challenge 3: Moto Fare
// Pseudocode:
// 1. If distance is 0 or less, return 0.
// 2. If distance is 2 km or less, return 300.
// 3. Calculate extra kilometres by subtracting 2 from the distance.
// 4. Round extra kilometres up using Math.ceil().
// 5. Multiply extra kilometres by 107.
// 6. Add the extra cost to 300 and return the total.

function motoFare(km) {
    if (km <= 0) {
        return 0;
    }

    if (km <= 2) {
        return 300;
    }

    const extraKm = Math.ceil(km - 2);
    const extraCost = extraKm * 107;

    return 300 + extraCost;
}

// Test cases
console.log(motoFare(0));   // 0
console.log(motoFare(2));   // 300
console.log(motoFare(3));   // 407
console.log(motoFare(4.5)); // 621





// Challenge 4: Convert Seconds
// Pseudocode:
// 1. Calculate hours by dividing seconds by 3600.
// 2. Keep only the whole number of hours.
// 3. Find the remaining seconds after removing hours.
// 4. Calculate minutes by dividing the remaining seconds by 60.
// 5. Find the remaining seconds after removing minutes.
// 6. Display minutes and seconds with two digits.

function convertSeconds(total) {
    const hours = Math.floor(total / 3600);
    const remainingSeconds = total % 3600;
    const minutes = Math.floor(remainingSeconds / 60);
    const seconds = remainingSeconds % 60;

    const formattedMinutes = String(minutes).padStart(2, "0");
    const formattedSeconds = String(seconds).padStart(2, "0");

    return `${hours}h ${formattedMinutes}m ${formattedSeconds}s`;
}

// Test cases
console.log(convertSeconds(7539)); // 2h 05m 39s
console.log(convertSeconds(3600)); // 1h 00m 00s
console.log(convertSeconds(65));   // 0h 01m 05s
console.log(convertSeconds(0));    // 0h 00m 00s






// Challenge 5: Change Maker
// Pseudocode:
// 1. Create a list of denominations from largest to smallest.
// 2. For each denomination, calculate how many pieces fit.
// 3. Print the denomination and quantity.
// 4. Subtract the value used from the remaining amount.
// 5. Continue until all denominations have been checked.

function changeMaker(amount) {
    const denominations = [5000, 2000, 1000, 500, 100, 50, 20, 10, 5, 1];
    let remaining = Math.floor(amount);

    if (remaining < 0) {
        console.log("Invalid amount");
        return;
    }

    for (let i = 0; i < denominations.length; i++) {
        const denomination = denominations[i];
        const quantity = Math.floor(remaining / denomination);

        console.log(denomination + " RWF: " + quantity);

        remaining = remaining % denomination;
    }
}

// Test cases
console.log("Test 1: 7385 RWF");
changeMaker(7385);

console.log("Test 2: 100 RWF");
changeMaker(100);

console.log("Test 3: 0 RWF");
changeMaker(0);
