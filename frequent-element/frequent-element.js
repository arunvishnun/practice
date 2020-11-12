/**
 * Returns the most frequent element in the array.
 * In case if there is more than one - returns the last one.
 * @param  {Array} arr Input array
 * @return {any}
 */

//   Method 1
const findMostFrequent = (arr) => {
    if (!Array.isArray(arr) || !arr.length) {return 'invalid input'; }

    let map = new Map();
    let maxCount = 0;
    let maxCountItem = 0;

    arr.forEach( (element, index) => {
        if(map.has(element)) {
            map.set(element, map.get(element) +1);
        } else {
            map.set(element, 1);
        }     
    });
    
    map.forEach( (count, value)=> {
        if(count > maxCount) {
            maxCount = count;
            maxCountItem = value;
        }
    }) ;

    return maxCountItem;
}

// console.log(findMostFrequent([1,2,3,4,5,6,7,3]));


//   Method 2

const getFrequent = (arr) => {
    
    if (!Array.isArray(arr) || !arr.length) {return 'invalid input'; }
    let map = [];
    let max = 0;
    let maxItem;

    arr.forEach( (item, index) => {
        
        if(!map[item]) {
            map[item] = 0;
        }
        map[item] += 1;

        if (map[item] >= max) {
            max = map[item];
            maxItem = item;
        }
    });
    return maxItem;
}

console.log(getFrequent( [9]) );

//   Method 3
function mostFrequent(array) {
    const frequency = new Map();
    let mostFrequentItemCount = 0;
    let frequentItem = array[0];
    array.forEach((item, index) => {

        if (frequency.get(item)) {
            frequency.set(item, frequency.get(item) + 1); 
        } else {
            frequency.set(item, 1)
        }
        if (mostFrequentItemCount <= frequency.get(item)) {
            mostFrequentItemCount = frequency.get(item)
            frequentItem = item;
        }
    });
    return { frequentItem, mostFrequentItemCount };
}

console.log(mostFrequent([1,2,3,4,5,6,7,3,7]));