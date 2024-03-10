interface Car{
    company:string;
    model:string;
   [key:string]:any;
}
const buildCar = (company:string,model:string, extraFeature:{ [key: string]: any }) :Car => {
    let car:Car = {
        company: company,
        model: model,
        ...extraFeature,
    }
    return car;
}
console.log(buildCar('Bently','Flying Spur',{color:'blue',year:2022}));