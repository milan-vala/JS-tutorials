// null becomes zero 0
// sting becomes (other then numbers like '1,2...') becomes NaN 
// true false becomes 1,0 respectively
// Whitespaces from the start and end are removed. If the remaining string is empty,
// the result is 0. Otherwise, the number is “read” from the string. An error gives NaN.

let x = false;
console.log("x :- ", x);
console.log("typeof x is =>", typeof(x));

let y = Number(x);
console.log("y :- ", y);
console.log("typeof y is =>", typeof(y));