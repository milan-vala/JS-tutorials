//data hiding

function counter() {
    var count = 0;

    return function incrementCount(){
        count ++;
        console.log(count);
    }
}

//console.log(count); // will give the reference error

var myCounter = counter();
myCounter();
myCounter();
myCounter();

var myCounter2 = counter();
myCounter2();
myCounter2();