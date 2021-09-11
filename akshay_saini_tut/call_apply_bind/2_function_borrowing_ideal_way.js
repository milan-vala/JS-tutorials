let myName = {
    firstName: "milan",
    lastName: "vala",
}

printFullName.call(myName);

function printFullName () {
    console.log(this.firstName + " " + this.lastName);
}
//function borrowing
let myName2 = {
    firstName: "peter",
    lastName: "parker"
}

printFullName.call(myName2);