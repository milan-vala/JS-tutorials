const users = [
    { firstName: "milan", lastName: "vala", age: 26 },
    { firstName: "alon", lastName: "musk", age: 50 },
    { firstName: "donald", lastName: "trump", age: 75 },
    { firstName: "mia", lastName: "malkova", age: 26 },
];

/*
const output = users.map(x => x.firstName + " " + x.lastName);
console.log(output);

const output2 = users.reduce(function (acc, curr) {
    if (acc[curr.age]) {
        acc[curr.age] = ++acc[curr.age];
    } else {
        acc[curr.age] = 1;
    }
    return acc;
}, {});
console.log(output2);
*/

//const output3 = users.filter(x => x.age<30).map(x => x.firstName);
//console.log(output3);

const output4 = users.reduce(function(acc, curr) {
    if (curr.age<30) {
        acc.push(curr.firstName);
    }
    return acc;
}, []);
console.log(output4);
