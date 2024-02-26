interface Car{
    company:string;
    model:string;
   [key:string]:any;
}
const buildCar = (company:string,model:string, ...optional:{ [key: string]: any }) :Car => {
    let car:Car = {
        company: company,
        model: model,
        ...optional,
    }
    return car;

}
console.log(buildCar('Bently','Flying Spur',{color:'blue',warranty:'2 Year'}))