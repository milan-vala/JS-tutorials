// https://www.youtube.com/watch?v=ke_y6z0xRpk&ab_channel=AkshaySaini

let myName = {
    firstName: "milan",
    lastname: "vala",
}

let printName = function (city, state, country) {
    console.log(this.firstName + " " + this.lastname + " from " + city + ", " + state + ", " + country);
}

let printMyName = printName.bind(myName, "jamnagar", "gujarat"); // JS default implementation
printMyName("india") // JS default implementation

// our own implementation
Function.prototype.myBind = function (...args) {
    let obj = this;
    let params = args.slice(1) // it will remove 0th element from list and return rest of the array
    return function (...args2) {
        obj.apply(args[0], [...params, ...args2])
    }
}

let printMyName2 = printName.myBind(myName, "jamangar", "gujarat");
printMyName2("india")