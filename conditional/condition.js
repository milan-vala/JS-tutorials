// A number 0, an empty string "", null, undefined, and NaN all become false.
// Because of that they are called “falsy” values.
// Other values become true, so they are called “truthy”.

if (0) {
	console.log("if part.");
} else {
	console.log("else part"); //this will be execute.
}

if (0) {
	console.log("value 0");
} else if(1) { // 1, "any string (atleast space) exept blank string will be execute "
	console.log("value 1"); // this will be exacute
}

if (0) {
	console.log("in if part");
} else if ("") { // if there is even single space this will execute.
	console.log("else empty string part"); //this will not execute;
} else {
	console.log("here...")
}

if (0) {
	console.log("in if part");
} else if (" ") { // a single space
	console.log("single space part"); //this will execute;
} else {
	console.log("here...")
}
