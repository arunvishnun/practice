/**
 * Given an array A of N elements. The task is to find the greatest number S such that it is product of two 
 * elements of given array (S cannot be included in pair. Also, pair must be from different indices).
 * 
 * Input :  arr[] = {10, 3, 5, 30, 35}
Output:  30
Explanation: 30 is the product of 10 and 3.
 * */

// function findGreatest(arr) {
//     let maxProduct = -1;

//     for (let i=0;i<arr.length; i++) {
//         for (let j = i+1; j<arr.length; j++) {
//             let prod = arr[i] * arr[j];
            
//             if (arr.indexOf(prod) > -1) {
//                 if (prod > maxProduct) {
//                     maxProduct = prod;
//                 }
//             }
//         }
//     }
//     return maxProduct;
// }

// O(n^2)
function findGreatest(arr) {
    let maxProduct = -1;
    let map = new Map()
    for (let i=0;i<arr.length; i++) {
        map.set(arr[i], i)
    }
    for (let i=0;i<arr.length; i++) {
        for (let j = i+1; j<arr.length; j++) {
            let prod = arr[i] * arr[j];
            if (map.has(prod)) {
                if (prod > maxProduct) {
                    maxProduct = prod;
                }
            }
            
        }
    }
    
    return maxProduct;
}

console.log(findGreatest([10, 3, 5, 30, 35]))
