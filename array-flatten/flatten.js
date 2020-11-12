/**
 * Deep flattens the array.
 * Example: [1,[2, [3]]] => [1,2,3]
 * @return {Array}
 */

// Method 1
const flattenArray = (value, result = []) => {       
    value.forEach( (item, index) => {          
        if(Array.isArray(item)) {
            flattenArray(item, result);
        } else {
            result.push(item);
        }
    })
    return result;
}
console.log(flattenArray([1, 5, [2, [3]]]));



// Method 2
// Array.prototype.flatten = function() {

//     for (var i = 0; i < this.length; i++) {

//         if (Array.isArray(this[i])) {
//             Array.prototype.splice.apply(this, [i, 1].concat(this[i]));

//             // go back one step and check new element
//             i--;
//         }
//     }
// };

// const flattenArray = (myArray) => {
//     // return [].concat(...myArray);
    
// }

// console.log(flattenArray([1,[2, 3]]));

const flattenDeep = (x) => {
    return Array.isArray(x) ? [].concat(...x.map(flattenDeep)) : x
}
console.log(flattenDeep([1, 5, [2, [3]]]));