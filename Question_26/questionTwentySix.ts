let age:number = 66;
if(age<2){
    console.log('The Person is a Baby');
}else if(age===2 || age<4){
    console.log('The Person is a Toddler');
}else if(age === 4 || age<13){
    console.log('The Person is a Kid')
}else if(age ===13 || age<20){
    console.log('The Person is a Teenager')
}else if(age ===20 || age<65){
    console.log('The Person is a Adult')
}else if(age === 65){
    console.log('The Person is a Elder')
}else{
    console.log('Invalid Age')
}