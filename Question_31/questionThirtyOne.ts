let myNum:number[] = [1,2,3,4,5,6,7,8,9];
for(let i:number=0; i<myNum.length; i++){
    if(myNum[i] === 1){
        console.log(`${myNum[i]}st`)
    }else if(myNum[i] === 2){
        console.log(`${myNum[i]}nd`)
    }else if(myNum[i] === 3){
        console.log(`${myNum[i]}rd`)
    }else{
        console.log(`${myNum[i]}th`)
    }
};