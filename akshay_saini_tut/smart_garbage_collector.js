function a() {
    var x=1, y=2;

    return function() {
        console.log(x);
    }
}

var fun = a();
fun();