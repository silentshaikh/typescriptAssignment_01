"use strict";
let current_users = ['ben', 'harry', 'tom', 'sam', 'james'];
let new_users = ['Ben', 'Harry', 'jhon', 'banton', 'tim'];
new_users.forEach((e) => {
    if (current_users.includes(e.toLowerCase())) {
        console.log(`Sorry, UserName ${e} has already be taken`);
    }
    else {
        console.log(`The UserName ${e} is Available`);
        current_users.push(e);
    }
});
