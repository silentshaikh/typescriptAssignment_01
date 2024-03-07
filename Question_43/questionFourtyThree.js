"use strict";
const buildCar = (company, model, optional) => {
    let car = {
        company: company,
        model: model,
        ...optional,
    };
    return car;
};
console.log(buildCar('Bently', 'Flying Spur', { color: 'blue', year: 2022 }));
