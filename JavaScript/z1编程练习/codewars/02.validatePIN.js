// ATM machines allow 4 or 6 digit PIN codes and PIN codes cannot contain anything but exactly 4 digits or exactly 6 digits.

// If the function is passed a valid PIN string, return true, else return false.

// validatePIN("1234") === true
// validatePIN("12345") === false
// validatePIN("a234") === false


function validatePIN (pin) {
    const result = parseInt(pin, 10);
    return !isNaN(result) && (result.toString().length === 4 || result.toString().length === 6);
}


// console.log(validatePIN("1234") === true);
// console.log(validatePIN("12345") === false);
// console.log(validatePIN("a234") === false);
console.log(validatePIN('-1.234'));
// console.log();



