"use strict";
let guestlist1 = ['Bill Gates', 'Elon Musk', 'Babar Azam', 'Hasan Ali', 'khushal Khan'];
const initailInvite = () => {
    guestlist1.forEach((e) => {
        console.log(`Dear ${e}, \n You are invited to dinner at my House.`);
    });
};
const replaceGuest = (oldGuest, newGuest) => {
    let oldInvit = guestlist1.indexOf(oldGuest);
    guestlist1[oldInvit] = newGuest;
    console.log(`\n ${oldGuest} can't make dinner with them. \n`);
};
console.log('inital invite\n');
initailInvite();
replaceGuest('khushal Khan', 'Naseem');
console.log('Second set of inital invite:\n');
initailInvite();
