"use strict";
const sandwichFunc = (arr) => {
    if (arr.length === 0) {
        console.log('Sandwich not Available');
    }
    else {
        arr.forEach((e) => {
            console.log(`Your ${e} has been Delivered.`);
        });
    }
};
console.log('First Order\n');
sandwichFunc(['Cheeze Sandwich']);
console.log('\nSecond Order\n');
sandwichFunc(['Vegetable Sandwich', 'Potato Sandwich']);
console.log('\nThird Order\n');
sandwichFunc(['Fish Sandwich', 'Chicken Sandwich', 'Beef Sandwich']);
// sandwichFunc([])
