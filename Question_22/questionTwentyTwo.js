"use strict";
// Tests for equality and inequality with strings
let str = 'Hello World';
console.log(str == 'Hello World');
console.log(str.length !== 11);
// Tests using the lower case function
let str2 = 'HELLO WORLD';
console.log(str2.toLowerCase() === 'hello world');
console.log(str2.toLowerCase() !== 'hello world');
// Numerical tests involving equality and inequality, greater than and less than, greater than or equal to, and less than or equal to
console.log(5 > 6);
console.log(5 < 6);
console.log(10 >= 9);
console.log(13 <= 12);
// Tests using "and" and "or" operators
console.log(5 === 5 && 10 !== 10);
console.log(5 === 5 || 10 !== 10);
// Test whether an item is in a array
let arr = ['Apple', 'Banana', 'Orange'];
console.log(arr.includes('Apple'));
// Test whether an item is not in a array
console.log(arr.includes('Guava'));
