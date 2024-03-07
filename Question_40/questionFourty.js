"use strict";
let magicianNames1 = ['Harry Houdini', 'Harry Potter', 'Ron', 'Albus Dumbledore', 'Snape'];
const show_magician1 = (arr) => {
    arr.forEach((e) => {
        console.log(e);
    });
};
show_magician1(magicianNames1);
// Add Great
const great_magician = (arr) => {
    return arr.map((e) => `Great ${e}`);
};
magicianNames1 = great_magician(magicianNames1);
show_magician1(magicianNames1);
