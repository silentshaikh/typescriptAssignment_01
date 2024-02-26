// questionNinteen.ts
type Person ={
    name:string,
    age:number,
    city:string,
    country:string,
};
type objectContin<T> = Record<string,T> ;
const createObject = (obj:Person[]):objectContin<Person> => {
    let containItems: objectContin<Person> = {};
    obj.forEach((e,i) => {
        containItems[`Person ${i+10}`] = e;
    })
    return containItems;
}
let person:Person[] =[
    {
        name:'Ben',
        age:10,
        city:'Los Angelas',
        country:'USA',
    },
    {
        name:'Harry',
        age:10,
        city:'London',
        country:'Uk',
    },
]; 
console.log(createObject(person))