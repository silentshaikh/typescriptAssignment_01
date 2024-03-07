let guestlist4:string[] = ['Bill Gates','Elon Musk','Babar Azam','Hasan Ali','khushal Khan'];
const initailInvite4:() => void = () => {
    guestlist4.forEach((e) => {
        console.log(`Dear ${e}, \n You are invited to dinner at my House.`)
    })
}
const replaceGuest4: (oldGuest:string,newGuest:string) => void = (oldGuest:string,newGuest:string) => {
    let oldInvit = guestlist4.indexOf(oldGuest);
    guestlist4[oldInvit] = newGuest;
    console.log(`\n ${oldGuest} can't make dinner with them. \n`);
}
console.log('inital invite\n')
initailInvite4();
replaceGuest4('khushal Khan','Naseem');
console.log('Second set of inital invite:\n')
initailInvite4();
console.log('\n Add more Guest in the dinner \n');
guestlist4.unshift('Harry Potter');
let midAdd2 = Math.floor(guestlist4.length/2);
guestlist4.splice(midAdd2,0,'Tom');
guestlist4.push('Ben 10');
initailInvite4();
console.log('\n We can invite only two people for dinner. \n');
while(guestlist4.length>2){
        let popOut = guestlist4.pop();
        console.log(`${popOut} \n Sorry we can't invite you for dinner.\n`)
}
console.log(guestlist4);
guestlist4.forEach((e) => {
    console.log(`${e} \n You are still invited for the dinner \n`)
})
console.log(`We are invited only ${guestlist4.length} People for the Dinner\n`)
console.log('Remove the last two guest from list \n')
let totalGuest1 = guestlist4.length;
guestlist4.splice(0,totalGuest1);
console.log(guestlist4);
console.log(`\n The Total Number of People we are invited is ${guestlist4.length} \n`);
