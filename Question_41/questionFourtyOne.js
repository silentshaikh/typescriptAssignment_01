"use strict";
// questionFourtyOne.ts
let magicianNames3 = ['Harry Houdini', 'Harry Potter', 'Ron', 'Albus Dumbledore', 'Snape'];
let magicianNames3Copy = magicianNames3.slice();
const great_magician1 = (arrCopy) => {
    return arrCopy.map((e) => `Great ${e}`);
};
const show_magician3 = (arr) => {
    arr.forEach((e) => {
        console.log(e);
    });
};
let greatMagician = great_magician1(magicianNames3Copy);
console.log('Original Magician');
show_magician3(magicianNames3);
console.log(' \nInclude the name with Great');
show_magician3(greatMagician);
