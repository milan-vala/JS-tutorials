function outer() {
    var a = 1;
    function innter() {
        console.log(a);
    }
    return innter;
}

outer()();