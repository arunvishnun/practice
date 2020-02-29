/*
 * Finds and returns the only unique element in the array.
 * Running time is O(n), space complexity O(n).
 * @param  {Array} arr Input array
 * @return {any}
 */

 const getUnique = (arr) => {
    let duplicates = [];
    for(let i=0; i< arr.length; i++) {
        let el = arr[i];
        
        if (duplicates.indexOf(el) == -1) {
            if (arr.lastIndexOf(el) === i) {
                return el;
            }

            // store duplicated elements
            duplicates.push(el);
        }
    }
    return 'no unique element';
 }

 console.log(getUnique([1,2,3,4,3,2,1]));