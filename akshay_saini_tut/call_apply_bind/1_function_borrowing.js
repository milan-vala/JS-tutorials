let myName = {
    firstName: "milan",
    lastName: "vala",
    printFullName: function() {
        console.log(this.firstName + " " + this.lastName);
    }
}

myName.printFullName();

// sample way to call function from object

//function borrowing
let myName2 = {
    firstName: "peter",
    lastName: "parker"
}

myName.printFullName.call(myName2);