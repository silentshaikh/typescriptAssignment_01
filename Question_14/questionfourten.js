"use strict";
let guestlist2 = ['Bill Gates', 'Elon Musk', 'Babar Azam', 'Hasan Ali', 'khushal Khan'];
const initailInvite2 = () => {
    guestlist2.forEach((e) => {
        console.log(`Dear ${e}, \n You are invited to dinner at my House.`);
    });
};
const replaceGuest2 = (oldGuest, newGuest) => {
    let oldInvit = guestlist2.indexOf(oldGuest);
    guestlist2[oldInvit] = newGuest;
    console.log(`\n ${oldGuest} can't make dinner with them. \n`);
};
console.log('inital invite\n');
initailInvite2();
replaceGuest2('khushal Khan', 'Naseem');
console.log('Second set of inital invite:\n');
initailInvite2();
console.log('\n Add more Guest in the dinner \n');
guestlist2.unshift('Harry Potter');
guestlist2.push('Ben 10');
initailInvite2();
