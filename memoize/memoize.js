/* 
http://inlehmansterms.net/2015/03/01/javascript-memoization/

Create a memoize function that takes another function and modifies it to memoize calls.
*/

function memoize(fn) {
    let cache = {};
    return function() {
        let key = JSON.stringify(arguments);
        console.log(arguments);
        if(cache[key]) {
            console.log('served from cache!!!')
            return cache[key];
        } else {
            let val = fn.apply(this, arguments);
            cache[key] = val;
            console.log('Setting to cache!!!')
            
            return val;
            
        }
    };
}

function memoizeWithMap(fn) {
    const cache = new Map()
    return function() {
        const key = JSON.stringify(arguments);
        if (cache.has(key)) {
            console.log('served from cache!!!')
            return cache.get(key);
        } else {
            const value = fn.apply(this, arguments);
            console.log('Setting to cache!!!')
            cache.set(key, value);
            return value
        }
    }
}

// Reacts useCallback
function useCallback(fn, dependencies = []) {
    const cache = {};
    return function() {
        console.log(arguments)
        const key = JSON.stringify([arguments, ...dependencies]);
        if (cache[key]) {
            console.log('served from cache!!!')
            return cache[key];
        } else {
            const value = fn.apply(this, arguments);
            console.log('Setting to cache!!!')
            cache[key] = value;
            return value;
        }
    }
}

var factorial = useCallback(function(num) {
    console.log('working for factorial(' + num + ')');
    if(num === 1) { return 1 };
    return num * factorial(num - 1);
  });
  
// first call
console.log(factorial(3)); 
//=> working for factorial(3)
//=> working for factorial(2)
//=> working for factorial(1)
//=> 6

// successive calls
console.log(factorial(3)); //=> 6
console.log(factorial(3)); //=> 6

// short circuit higher factorial calls
console.log(factorial(4));
//=> working for factorial(4)
//=> 24
console.log(factorial(4));
