/**
 * Recursive way to reverse a string.
 * @param {*} str 
 */
function reverseString(str) {
    return (str === '') ? '' : reverseString(str.substr(1)) + str.charAt(0);
  }
console.log(reverseString("hello"));