
// Custom bind implementation
if(!Function.prototype.bound && typeof Function.prototype.bound !== 'function') {
    Function.prototype.bound = function(context, ...rest) {
        const self = this;
        return function () {
            self.apply(context, ...rest);
        }
    }
}

const info = {
    name: 'John',
}
function printInfo(country, city) {
    
    console.log()
    console.log(`I am ${this.name}, living in ${country} and city ${city}`);
    console.log()
}

const myinfo = printInfo.bound(info, ['USA', 'CA']);
myinfo();

