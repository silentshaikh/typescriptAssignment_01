// questionFourtyOne.ts
let magicianNames3:string[] = ['Harry Houdini','Harry Potter','Ron','Albus Dumbledore','Snape'];
let magicianNames3Copy:string[] = magicianNames3.slice();

const great_magician1 = (arrCopy:string[]):string[] => {
    return arrCopy.map((e) => `Great ${e}`);
};
const show_magician3 = (arr:string[]):void => {
    arr.forEach((e) => {
        console.log(e)
    })
}
let greatMagician:string[] = great_magician1(magicianNames3Copy);
console.log('Original Magician')
show_magician3(magicianNames3)
console.log(' \nInclude the name with Great');
show_magician3(greatMagician);