// https://leetcode.com/problems/valid-parentheses/
function validParanthesis(s) {
    if (s.length === 0) return true;
    if (s.length %2 !==0) return false;
    const map = {
        ')':'(',
        '}':'{',
        ']':'['
    }
    const stack = [];
    for (let i=0; i<s.length; i++) {

        if(stack.length !=0 && stack[stack.length-1] === map[s[i]]) {
            stack.pop()
        } else {
            stack.push(s[i])
        }
    }
    return stack.length === 0
}