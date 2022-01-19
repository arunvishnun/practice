// Explanation with picture
// https://www.geeksforgeeks.org/quick-sort-vs-merge-sort/

function merge(lArray, rArray, result = []) {
    let i = 0;
    let j = 0;
    let k = 0
    let nL = lArray.length;
    let nR = lArray.length;
    
    
    while (i < nL && j < nR) {
        
        if (lArray[i] <= rArray[j]) {
            result[k] = lArray[i];
            i++;
        }
        else {
            result[k] = rArray[j];
            j++;
        }
        k++;
    }
    
    while (i < nL) {
        result[k] = lArray[i];
        i++;
        k++;
    }

    while (j < nR) {
        result[k] = rArray[j];
        j++;
        k++;
    }

    return result;
}

function sort(array) {
    const length = array.length
    if (length < 2) {
        return;
    }
    const l = []
    const r = [];
    const mid = length/2
    for (let i = 0; i< mid; i++) {
        l.push(array[i]);
    }
    for (let j = mid; j< length; j++) {
        r.push(array[j])
    }

    sort(l);
    sort(r);
    return merge(l, r, array);
}
console.log(sort([9,7,5,3,4,6,8,10]));

 



