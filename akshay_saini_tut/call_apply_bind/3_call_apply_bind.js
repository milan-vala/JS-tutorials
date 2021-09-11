console.log("helllooo")
let myName = {
    firstName: "milan",
    lastName: "vala",
}

printFullName.call(myName, "rajkot", "rajasthan");

function printFullName (city, state) {
    console.log(this.firstName + " " + this.lastName + " from " + city + ", " + state);
}

let myName2 = {
    firstName: "peter",
    lastName: "parker"
}

//call
printFullName.call(myName2, "jamnagar", "gujarat");

//apply
printFullName.apply(myName2, ["ahmedabad", "Gujarat"])

//bind //it will return the copy of printFullName function body
let output = printFullName.bind(myName2, "jamnagar", "gujarat");
console.log(output)
output()