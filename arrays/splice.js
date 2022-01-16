// Array.splice(start, deleteCount, item1, item2, itemN, ...)
// return value
// 1. if no elements removed from array returns [] empty array
// 2. If only one element is removed, an array of one element is returned.
// 3. An array containing the deleted elements.

let months = ["january", "march", "april", "june"];

months.splice(1, 0, "february");
console.log("months add feb =>", months);
// ["january", "february", "march", "april", "june"]

months.splice(4, 1, "may");
console.log("months replace june ->", months)