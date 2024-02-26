let guestlist3:string[] = ['Bill Gates','Elon Musk','Babar Azam','Hasan Ali','khushal Khan'];
const initailInvite3:() => void = () => {
    guestlist3.forEach((e) => {
        console.log(`Dear ${e}, \n You are invited to dinner at my House.\n`)
    })
}
const replaceGuest3: (oldGuest:string,newGuest:string) => void = (oldGuest:string,newGuest:string) => {
    let oldInvit = guestlist3.indexOf(oldGuest);
    guestlist3[oldInvit] = newGuest;
    console.log(`\n ${oldGuest} can't make dinner with them. \n`);
}
console.log('inital invite\n')
initailInvite3();
replaceGuest3('khushal Khan','Naseem');
console.log('Second set of inital invite:\n')
initailInvite3();
console.log('\n Add more Guest in the dinner \n');
guestlist3.unshift('Harry Potter');
guestlist3.push('Ben 10');
initailInvite3();
console.log('\n We can invite only two people for dinner. \n');
let remOne:string|undefined =  guestlist3.pop();
let remTwo:string|undefined =  guestlist3.pop();
let remThree:string|undefined =  guestlist3.pop();
let remFour:string|undefined =  guestlist3.shift();
let remFive:string|undefined =  guestlist3.shift();
let removGuestList:(string | undefined)[] = [remOne,remTwo,remThree,remFour,remFive];
removGuestList.forEach((e) => {
    console.log(`Dear ${e},\n Sorry you can't invite them to dinner. \n`)

})
guestlist3.forEach((e) => {
    console.log(`Dear ${e}, \n You are still invited to dinner at my House.\n `)
})
guestlist3.splice(0,2);
console.log(guestlist3)
