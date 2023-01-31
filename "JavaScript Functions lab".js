// 1. Define a function, as a function declaration, maxOfTwoNumbersthat takes two numbers as arguments and returns the largest of them. If they are the same, return that number. Use the if-else construct or a ternary expression - the Math.max method is not allowed.


function maxoftwonumbersthat (number1,number2){
    //If number 1 is greater or equal to number 2 return number 1.
    if (number1 >= number2){
     return number1
    }
  // if number 2 is greater than number 1, return number 2
    if (number2 > number1){
      return number2 
    }
  }
  console.log(maxoftwonumbersthat(10,20))
  
  
  2.//Define a function, as a function expression, maxOfThreethat takes three numbers as arguments and returns the largest of them. Again, the Math.max method is not allowed.
  
    // If number1 is greater than number 2 and number 2 is greater than number 3. This means number 1 is greater than number 3.
  
  
  // if number 2 is greater than number 1 and number 1 is greater than number 3 then number 2 is my largest. 
  
  *const maxOfThree =(x,y,z) =>{
    if(x>=y && x>=z){
        return x;
    }else if (y>=x && y<=z){
    return z;
    
    }
    }
    console.log(maxOfThree(1,2,9,))*/
    
  
  3//Define a function, as a function declaration, isCharAVowelthat takes a character as an argument and returns true if it is a vowel, false otherwise.
  const vowel = ['a','e','i','o','u'];
 if(vowel.includes(char.toLowerCase)) {
 return true 
 } else {
   return false
 }
}
 
console.log(isCharAVowel('b'))*/

    
  4//Define a function, as a function expression, sumArraythat takes an array of numbers and returns the sum of those numbers. For example, sumArray([2, 4, 5]);would return 11.
  function sumArray(array) {
    let sum = 0;
  
    for (const item of array) {
      sum += item;
    }
  
    console.log(sum);
    return sum;
  }
  
  sumArray([1, 2, 3, 4,5]);
    
  5//Define a function, as a function declaration, multiplyArraythat takes an array of numbers and returns the product those numbers. For example, multiplyArray([2, 4, 5]);would return 40.
  *function multiplyArray(array){
    let product = 1;
    
    for(let i= 0; i <array.length; i++) {
      product*=array[i];
  }
    console.log(product);
    return product;
  }
  multiplyArray([2,2,2,2])*/
  
  
  6//Define a function, as a function expression, numArgsthat returns the number of arguments passed to the function when called.
  *let numArgs = (...args) => {
  console.log(args.length)
}
 numArgs(3,2,6,953903,)*/
  
  7//Define a function, as a function declaration, reverseStringthat takes a string, reverses the characters, and returns it. For example, reverseString('rockstar');would return the string "ratskcor".
  
  
  8//Define a function, as a function expression, longestStringInArraythat takes an array of strings as an argument and returns the length of the longest string.
  
  
  9//Define a function, as a function declaration, stringsLongerThanthat takes an array of strings and a number as arguments; and returns an array of the strings that are longer than the number passed in. For example, stringsLongerThan(['say', 'hello', 'in', 'the', 'morning'], 3);would return ["hello", "morning"].
  
  
  