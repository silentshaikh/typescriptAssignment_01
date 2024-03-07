"use strict";
let storeLocation = ['Switzerland', 'Greece', 'Turkey', 'India', 'Singapore', 'Bali', 'UK', 'Finland', 'USA', 'Italy'];
// print originl array
console.log(storeLocation);
// Print array in alphabetical order without modifying the actual list
let alphabatecArray = storeLocation.slice().sort();
console.log(alphabatecArray);
// print originl array
console.log(storeLocation);
// Print array in reverse alphabetical order without changing the order of the original list
let reversArray = storeLocation.slice().sort().reverse();
console.log(reversArray);
// print originl array
console.log(storeLocation);
// reverse original array
storeLocation.reverse();
console.log(storeLocation);
// reverse original array again
storeLocation.reverse();
console.log(storeLocation);
// sort original array
storeLocation.sort();
console.log(storeLocation);
// reverse original array in reverse alpahbetical order
storeLocation.sort().reverse();
console.log(storeLocation);
