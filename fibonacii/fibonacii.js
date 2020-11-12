/**
 * Finds nth Fibonacci number (version with F0). Recursive implementation.
 * F(n) = F(n-1) + F(n-2)
 * @see https://en.wikipedia.org/wiki/Fibonacci_number
 *
 * Average time complexity: O(2^n)
 * 
 * @param  {Number} n Target number
 * @return {Number}
 */
  
 const fibonacci = (n) => {

    if(n <= 1) {
        return n;
    }
    return fibonacci(n-1) + fibonacci(n-2);
 }

 console.log(fibonacci(10));

/**
 * Finds nth Fibonacci number without recursion.
 *
 * Average time complexity: O(n)
 * 
 * @param  {Number} n Target number
 * @return {Number}
 */

const fibonacci2 = (n) => {
    let a = 0;
    let b = 1; 
    let s = 1;
    for (let i = 2; i <= n; i++) {

        b = a;
        a = s;
        a = s;

        s = a + b;
    }

    return s;
 }

 console.log(fibonacci2(10));


/**
 * Finds nth Fibonacci number with dynamic programming.
 *
 * Average time complexity: O(n)
 * 
 * @param  {Number} n Target number
 * @return {Number}
 */

const fibonacci3 = (n) => {
    let f = [];
    f[0] = 0;
    f[1] = 1; 
    
    for (let i = 2; i <= n; i++) {        
        f[i] = f[i-1] + f[i-2];
    }
     return f[n];
 }

 console.log(fibonacci3(10));

 