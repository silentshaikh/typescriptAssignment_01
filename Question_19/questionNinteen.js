"use strict";
const createObject = (obj) => {
    let containItems = {};
    obj.forEach((e, i) => {
        containItems[`Person ${i + 10}`] = e;
    });
    return containItems;
};
let person = [
    {
        name: 'Ben',
        age: 10,
        city: 'Los Angelas',
        country: 'USA',
    },
    {
        name: 'Harry',
        age: 10,
        city: 'London',
        country: 'Uk',
    },
];
console.log(createObject(person));
