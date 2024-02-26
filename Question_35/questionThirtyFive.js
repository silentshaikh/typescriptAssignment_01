"use strict";
const make_shirtOne = (size = 'large', message = 'I Love Typescript') => {
    console.log(`The Size of the Shirt is ${size} and the message is : ${message}.`);
};
make_shirtOne();
make_shirtOne('medium', 'The Shirt is one of the best shirrt in my Outlet');
