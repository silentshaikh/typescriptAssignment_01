let userNames1:string[] = [];

    if(userNames1.length === 0){
        console.log('We need to find some users!')
    }else{
        for(let i:number=0; i<userNames1.length; i++){
        if(userNames1[i] === 'Admin'){
            console.log(`Hello ${userNames1[i]}, would you like to see a status report?`)
        }else{
            console.log(`Hello ${userNames1[i]}, thank you for logging in again.`)
        }
        }
}
