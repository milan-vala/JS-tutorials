// ===> Function Statement aka Function Declaration
// a(); can call over here too

function a() {
    console.log("a called");
}
a();

// ===> Function expression
// b()
// can not call function expression before it initialized
// will throw b is not a function error
var b = function () {
    console.log("b called");
}

b();

// Anonymous Functions
// function () { // will give error identifier expacted
// }

// can user anonymous functions in closures to return functions or
// can assign an anonymous function in function expression

// ===> Named function Expression
var c = function abc() {
    console.log("c called");
}

c();


// ===> First class functions / First class citizens