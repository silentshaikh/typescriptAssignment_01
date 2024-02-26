const describe_city = (city:string='Karachi',country:string='Pakistan') => {
    console.log(`${city} is in ${country}.`)
}
describe_city();
describe_city('London','England');
describe_city('Istanbul','Turkey');
describe_city('Washington DC','USA');