// "0 {string}" becomes true '0 {number} becomes false',
// "1 string or number" becomes true,
// "any string even `false`" becomes true
// empty string without space becomes false otherwise true
// undefined, null, NaN becomes false


let bool = "false";
console.log("bool :- ", bool);
console.log("typeof bool is =>", typeof bool);

let myBool = Boolean(bool);
console.log("myBool is :- ", myBool);
console.log("typeof myBool is =>", typeof myBool);