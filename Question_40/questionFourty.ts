let magicianNames1:string[] = ['Harry Houdini','Harry Potter','Ron','Albus Dumbledore','Snape'];
const show_magician1 = (arr:string[]):void => {
    arr.forEach((e) => {
        console.log(`The Great : ${e}`);
    })
};
show_magician1(magicianNames1); 