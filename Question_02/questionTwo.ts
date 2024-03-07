let personName:string = 'Harry potter';
console.log(personName.toLowerCase());
console.log(personName.toUpperCase())
const titleCase = (str:string):string => {
    return str.replace(/\w\S*/g,(e) => {
        return e.charAt(0).toUpperCase()+e.substring(1).toLowerCase();
    })
}
console.log(titleCase(personName));