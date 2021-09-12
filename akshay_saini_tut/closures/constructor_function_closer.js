// data hiding
// like a constructor function
// it constructs a new counter whenever this Counter() function is called
// it still forms a closure

function Counter() {
    var count = 0;

    this.incrementCount = function() {
        count ++;
        console.log(count);
    }
    this.decrementCount = function() {
        count --;
        console.log(count);
    }
}

var myCounter = new Counter();
console.log(myCounter);
myCounter.incrementCount();
myCounter.incrementCount();
myCounter.decrementCount();