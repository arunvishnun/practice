console.log('-----------');
console.log('Prototypal Model');
console.log('-----------');
var FooPrototype = {
    constructor: function(value) {
        this._val = value;
    },
    get: function() {
        return this._val;
    }
}


var childFoo = Object.create(FooPrototype);
childFoo.constructor(10);
console.log(childFoo.get());
childFoo.get = function() {
    return FooPrototype.get.call(this) + "!!!";
}
console.log(childFoo.get());

console.log('-----------');
console.log('Classical Model');
console.log('-----------');
function Foo(value) {
    this._val = value;
} 

Foo.prototype.get = function() {
    return this._val;
}

function chFoo(value) {
    Foo.call(this, value);
}

chFoo.prototype = Object.create(Foo.prototype);
// chFoo.prototype.constructor = chFoo;

var foo = new Foo(20);
var chfoo = new chFoo(40);
console.log(chfoo.get());

console.log('-----------');
console.log('ES6 classical Model syntax');
console.log('-----------');
class FooClass {
    constructor(value) {
        this._val = value;
    }
    get() {
        return this._val;
    }

}

var f = new FooClass(42);
console.log(f.get());

class childFooClass extends FooClass {
    constructor(value) {
        super(value);
    }
    get() {
        return this._val + '!!!';
    }
}

var fc = new childFooClass(34);
console.log(fc.get());