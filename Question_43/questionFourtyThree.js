"use strict";
const buildCar = (company, model, extraFeature) => {
    let car = {
        company: company,
        model: model,
        ...extraFeature,
    };
    return car;
};
console.log(buildCar('Bently', 'Flying Spur', { color: 'blue', year: 2022 }));
