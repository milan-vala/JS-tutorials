function x() {
    var a = 10;
    
    return function y() {
        console.log(a);
    }
    // return y() alternative
}

var z = x();
console.log(z);
z();