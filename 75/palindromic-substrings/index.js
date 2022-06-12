/**
 * https://leetcode.com/problems/palindromic-substrings/
 * @param {string} s
 * @return {number}
 */

function countPalindrom(s, l, r) {
    let result = 0;
    while(l >= 0 && r < s.length && s[l] === s[r]) {
        l--;
        r++;
        result = result + 1
    }
    return result;
}

var countSubstrings = function(s) {
    let result = 0
    for (let  i=0 ;i< s.length; i++) {
        result = result + countPalindrom(s, i, i)
        result = result + countPalindrom(s, i, i+1)
    }
    
    return result;
};