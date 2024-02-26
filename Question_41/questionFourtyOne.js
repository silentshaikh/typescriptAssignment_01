"use strict";
// questionFourtyOne.ts
let magicianNames2 = ['Harry Houdini', 'Harry Potter', 'Ron', 'Albus Dumbledore', 'Snape'];
let magicianNames2Copy = magicianNames2.slice();
const great_magician = (arr) => {
    return arr.map((e) => `Great ${e}`);
};
const show_magician2 = (arr) => {
    let magicianName = arr.join();
    console.log(magicianName);
};
let greatMagician = great_magician(magicianNames2Copy);
console.log('Original Magician');
show_magician2(magicianNames2);
show_magician2(greatMagician);
