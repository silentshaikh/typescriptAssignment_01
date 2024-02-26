let current_users:string[] = ['ben','harry','Tom','Sam','James'];
let new_users:string[] = ['Ben','Harry','Jhon','Banton','Tim'];
new_users.forEach((e) => {
    if(current_users.includes(e.toLowerCase())){
        console.log(`Sorry, UserName ${e} has already be taken`)
    }else{
        console.log(`The UserName ${e} is Available`);
    }
})

