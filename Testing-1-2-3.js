/*
Your team is writing a fancy new text editor and you've been tasked with implementing the line numbering.

Write a function which takes a list of strings and returns each line prepended by the correct number.

The numbering starts at 1. The format is n: string. Notice the colon and space in between.

Examples:

number([]) // => []
number(["a", "b", "c"]) // => ["1: a", "2: b", "3: c"]
*/
let number=function(array){
    
    const resultArr = [];
    let j = 1;
    
    for (let i = 0; i < array.length; i += 1) {
      if (array.length === 0) {
        return `Empty array should return empty array`;
      } 
      else {
        resultArr.push(`${j}: ${array[i]}`); // push line number to the begin of each line ( arra[i])
        j += 1;
      }
    }
    
    return resultArr;
  }
