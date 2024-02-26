"use strict";
// Find The Prime Number or not a prime number
// Abdul Moiz
// 22-2-2024
let checkPrime = true;
const isPrime = (convNumber) => {
    for (let i = 2; i < convNumber; i++) {
        if (convNumber % i == 0) {
            checkPrime = false;
        }
    }
    if (checkPrime) {
        console.log(`${convNumber} is a Prime Number`);
    }
    else {
        console.log(`${convNumber} is a not Prime Number`);
    }
};
isPrime(97);
// Find The Prime Number or not a prime number
// Abdul Moiz
// 22-2-2024
let isEvenOdd = false;
const isEvenOrOdd = (num) => {
    if (num % 2 === 0) {
        isEvenOdd = true;
    }
    else {
        isEvenOdd = false;
    }
    return isEvenOdd;
};
isEvenOrOdd(15);
if (isEvenOdd) {
    console.log('Even Number');
}
else {
    console.log('Odd Number');
}
