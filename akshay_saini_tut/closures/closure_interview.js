function outest() {
    var c = 20;

    function outer(b) {
        
        function inner() {
            console.log(a, b, c);
        }
        var a = 1; // if i comment out here it will try to resolve in scope chain
        return inner;
    }
    return outer;
}

let a = 100;

var close = outest()("hello world");
// var close = (outest())("hello world"); alternative
console.log(close)
close();

var closure = outest()
console.log(closure)