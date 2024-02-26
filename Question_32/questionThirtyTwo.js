"use strict";
let pizaaList = ['Chicken Tikka Pizza', 'Double Spicy Pizza', 'Cheeze Peperoni Pizza'];
for (let i = 0; i < pizaaList.length; i++) {
    console.log(pizaaList[i]);
}
console.log('\n Sentence About My Favourite Pizza. \n');
for (let i = 0; i < pizaaList.length; i++) {
    if (pizaaList[i] === 'Chicken Tikka Pizza') {
        console.log(`I really like ${pizaaList[i]}.`);
    }
    else if (pizaaList[i] === 'Double Spicy Pizza') {
        console.log(`I really like ${pizaaList[i]}.`);
    }
    else if (pizaaList[i] === 'Cheeze Peperoni Pizza') {
        console.log(`I really like ${pizaaList[i]}.`);
    }
    else {
        console.log("I Dnn't like Pizza");
    }
}
console.log('\n I Really Like Pizza');
