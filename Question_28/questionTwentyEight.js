"use strict";
let userNames = ['Harry', 'Ben', 'Tom', 'Admin', 'Jerry'];
for (let i = 0; i < userNames.length; i++) {
    if (userNames[i] === 'Admin') {
        console.log(`Hello ${userNames[i]}, would you like to see a status report?`);
    }
    else {
        console.log(`Hello ${userNames[i]}, thank you for logging in again.`);
    }
}
