"use strict";
let guestlist3 = ['Bill Gates', 'Elon Musk', 'Babar Azam', 'Hasan Ali', 'khushal Khan'];
const initailInvite3 = () => {
    guestlist3.forEach((e) => {
        console.log(`Dear ${e}, \n You are invited to dinner at my House.`);
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
let midAdd1 = Math.floor(guestlist3.length / 2);
guestlist3.splice(midAdd1, 0, 'Tom');
guestlist3.push('Ben 10');
initailInvite3();
console.log('\n We can invite only two people for dinner. \n');
while (guestlist3.length > 2) {
    let popOut = guestlist3.pop();
    console.log(`${popOut} \n Sorry we can't invite you for dinner.\n`);
}
console.log(guestlist3);
guestlist3.forEach((e) => {
    console.log(`${e} \n You are still invited for the dinner \n`);
});
console.log('Remove the last two guest from list \n');
guestlist3.pop();
guestlist3.pop();
console.log(guestlist3);
