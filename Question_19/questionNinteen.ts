interface EmplyeeList{
    empName:string,
    empId:number,
    empSkill:string[],
};
const createObj = (name:string,id:number,skill:string[]):EmplyeeList => {
    return {empName:name,empId:id,empSkill:skill,};
}
const objctOne = createObj('Ben',1,['Front-End-Developer'])
const objctTwo = createObj('Tom',2,['Back-End-Developer'])
const objctThree = createObj('Abdul Moiz',2,['Generative AI Engineer','BlockChain Developer']);
console.log(objctThree)
console.log(objctOne)
console.log(objctTwo)