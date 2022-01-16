// array.slice returns a shallow copy of an array, it doesn't alter the original array.
// both origin and new array referenece to the same object.
// array.slice accepts two arguments, (start) of an index and (end - not included) of an index, both are optional

const animals = ['ant', 'bison', 'camel', 'duck', 'elephant'];
console.log(animals.slice(2));
console.log("animals =>", animals);

console.log(animals.slice(1,3))
console.log(animals.slice(-1))
console.log(animals.slice(2,-1))
console.log(animals.slice())