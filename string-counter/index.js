/**
 * You are given a string - a2b3c0d1.
 * getNext() should print next char each time its called.
 * example - 
 * getNext() // a
 * getNext() // a
 * getNext() // b
 * getNext() // b
 * getNext() // b
 * getNext() // d
 */

let fn = (str) => {
    counter = 0;

    for(let i=0; i<str.length; i=i+2) {
        
        let counter = str.charAt(i+1);
        let char =  str.charAt(i);
        console.log(counter, char);
        return function(){
			if(counter > 0) {
                counter--;
				return char;
			} 
            
        }
        
    }
    
 }

 let getNext = fn('a2b3c0d1');
 console.log(getNext());
 console.log(getNext());
 console.log(getNext());
 console.log(getNext());