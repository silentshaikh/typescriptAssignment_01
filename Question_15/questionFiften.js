"use strict";
let guestlist3 = ['Bill Gates', 'Elon Musk', 'Babar Azam', 'Hasan Ali', 'khushal Khan'];
const initailInvite3 = () => {
    guestlist3.forEach((e) => {
        console.log(`Dear ${e}, \n You are invited to dinner at my House.\n`);
    });
};
const replaceGuest3 = (oldGuest, newGuest) => {
    let oldInvit = guestlist3.indexOf(oldGuest);
    guestlist3[oldInvit] = newGuest;
    console.log(`\n ${oldGuest} can't make dinner with them. \n`);
};
console.log('inital invite\n');
initailInvite3();
replaceGuest3('khushal Khan', 'Naseem');
console.log('Second set of inital invite:\n');
initailInvite3();
console.log('\n Add more Guest in the dinner \n');
guestlist3.unshift('Harry Potter');
guestlist3.push('Ben 10');
initailInvite3();
console.log('\n We can invite only two people for dinner. \n');
let remOne = guestlist3.pop();
let remTwo = guestlist3.pop();
let remThree = guestlist3.pop();
let remFour = guestlist3.shift();
let remFive = guestlist3.shift();
let removGuestList = [remOne, remTwo, remThree, remFour, remFive];
removGuestList.forEach((e) => {
    console.log(`Dear ${e},\n Sorry you can't invite them to dinner. \n`);
});
guestlist3.forEach((e) => {
    console.log(`Dear ${e}, \n You are still invited to dinner at my House.\n `);
});
guestlist3.splice(0, 2);
console.log(guestlist3);
