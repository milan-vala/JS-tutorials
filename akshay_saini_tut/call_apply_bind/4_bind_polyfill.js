let myName = {
    firstName: "milan",
    lastname: "vala",
}

let printName = function () {
    console.log(this.firstName + " " + this.lastname);
}

let printMyName = printName.bind(myName); // JS default implementation
printMyName() // JS default implementation

// own implementation
Function.prototype.myBind = function (...args) {
    let obj = this;
    return function () {
        obj.call(args[0])
    }
}

let printMyName2 = printName.myBind(myName);
printMyName2()