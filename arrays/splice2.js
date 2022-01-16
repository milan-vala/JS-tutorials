let array = ["table", "fan", "chair", "jar", "window"];

// remove 0 elements before index 2 and insert "pillow"

array.splice(2, 0, "pillow");
console.log(array);

// remove 0 elements before index 2 and insert "glasses" and "bottle"

array.splice(2, 0, "glasses", "bottle")
console.log(array)

// remove 1 element at index 3

let removed = array.splice(3, 1);
console.log(array)
console.log("removed ->", removed);

// ['table', 'fan', 'glasses', 'pillow', 'chair', 'jar', 'window']

// remove 2 element from index 1 and insert "chain", "mask" and "boot"

array.splice(1, 2, "chain", "mask", "boot")
console.log(array)

//remove 1 element from index -2
array.splice(-2, 1)
console.log(array)

// remove all elements starting from index 2
let remove_all = array.splice(2)
console.log("remove all",array)
console.log("removed all ->",remove_all)