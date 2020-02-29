/**
 * Check if a given string is palindrome
 */

 const isPalindrome = (str) => {
    let i=0; let j=str.length-1;
    let flag = true;
    while (i<j){
        
        if(str.charAt(i) !== str.charAt(j)) {
            flag = false;
            break;
        }        
        i++;
        j--;    
    }
    return flag;
 }

 console.log(isPalindrome("heloleh"))