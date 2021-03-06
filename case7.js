let object1 = {
    firstName:'Kate',
    lastName:'Holms',
    adress:{
        city:'New York',
        state:'NY'
    },
    age:45,
    animals:['cat','dog','mouse'],
};
console.log(object1.firstName);/*Kate*/
console.log(object1.adress.city);/*New York */
console.log(Object.keys(object1));/*'firstName', 'lastName', 'address, 'age', 'animals' */
console.log(Object.values(object1));/*["Kate", "Holms", {…}, 45, Array(3)] */
console.log(object1.hasOwnProperty(lastName));/*false */
console.log(object1.hasOwnProperty('age'));