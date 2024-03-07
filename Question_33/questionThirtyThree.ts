let aminalname = ['Cat','Dog','Lion'];
for(let i:number=0; i<aminalname.length; i++){
    console.log(aminalname[i])
}
console.log('\n Sentence About My Favourite Pizza. \n')
for(let i=0; i<aminalname.length; i++){
    if(aminalname[i].toLowerCase() === "Cat".toLowerCase()){
        console.log(`A ${aminalname[i]} would make a cute pet`);
    }else if(aminalname[i].toLowerCase() === "Dog".toLowerCase()){
        console.log(`A ${aminalname[i]} would make a great pet`);
    }else if(aminalname[i].toLowerCase() === "Lion".toLowerCase()){
        console.log(`A ${aminalname[i]} is a King`);
    }else{
        console.log('None of Them')
    }
}
console.log('\n Any of these animals would make a great pet!')