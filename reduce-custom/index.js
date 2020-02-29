Array.prototype.reduceCustom = function(fn) {
    let accumulator = 0;
    if(arguments[1]) {
        accumulator = arguments[1];
    }
    this.forEach((value, index) => {
        accumulator = fn.apply(this, [accumulator, value]);
    });
    return accumulator;
}


let sum = [1,2,3,4,5].reduceCustom(function(accumulator, current) {
    return accumulator + current;
}, 5);

console.log(sum);