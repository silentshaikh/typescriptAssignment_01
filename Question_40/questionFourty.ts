let magicianNames1:string[] = ['Harry Houdini','Harry Potter','Ron','Albus Dumbledore','Snape'];
const show_magician1 = (arr:string[]):void => {
    arr.forEach((e) => {
        console.log(e);
    })
};
show_magician1(magicianNames1); 
// Add Great
const great_magician = (arr:string[]):string[] => {
    return arr.map((e) => `Great ${e}`);
};
magicianNames1 = great_magician(magicianNames1);
show_magician1(magicianNames1); 