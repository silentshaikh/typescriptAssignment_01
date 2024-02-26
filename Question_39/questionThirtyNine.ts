let magicianNames:string[] = ['Harry Houdini','Harry Potter','Ron','Albus Dumbledore','Snape'];
const show_magician = (arr:string[]):void => {
    arr.forEach((e) => {
        console.log(e);
    })
};
show_magician(magicianNames); 