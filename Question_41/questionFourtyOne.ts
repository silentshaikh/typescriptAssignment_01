// questionFourtyOne.ts
let magicianNames2:string[] = ['Harry Houdini','Harry Potter','Ron','Albus Dumbledore','Snape'];
let magicianNames2Copy:string[] = magicianNames2.slice();

const great_magician = (arr:string[]):string[] => {
    return arr.map((e) => `Great ${e}`);
};
const show_magician2 = (arr:string[]):void => {
    let magicianName:string = arr.join();
    console.log(magicianName)
}
let greatMagician:string[] = great_magician(magicianNames2Copy);
console.log('Original Magician')
show_magician2(magicianNames2)
show_magician2(greatMagician);