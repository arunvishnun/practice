// Implement a lodash get function
// Input - 
//  - a deep nested obect 
// Output -
//  - value for a given key from object - example a.b.c

function get(obj, key) {
    let path = key.split('.');
    if (!obj) {
        return undefined
    }

    // if key is top level = only first level
    if (path.length === 1 && obj[path[0]]) {
        return obj[path[0]];
    }

    return get(obj[path[0]], key.substring(2));
}

const obj = {
    a: '12',
    b: {
        c: '8',
        d: 10,
        e: {
            k: 15,
        }
    }
}

console.log(get(obj, 'b.e'))