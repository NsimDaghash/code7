/*
In this Kata, you will be given an array of numbers in which two numbers occur once and the rest occur only twice. Your task will be to return the sum of the numbers that occur only once.

For example, repeats([4,5,7,5,4,8]) = 15 because only the numbers 7 and 8 occur once, and their sum is 15. Every other number occurs twice.

More examples in the test cases.

Good luck!
*/
function repeats(arr){
  
    let i;
    let sum = 0;
    arr.sort((a, b) => {  // sort  by value from lower to higher
      return a - b;
    });
    for (i = 0; i < arr.length; i += 2) {  // 2 parameters of the array
      if (arr[i] !== arr[i + 1]) {  
        sum += arr[i];     // add to sum
        i--;              // return 1 step backword , else i would miss a number
      }
    }
    return sum;
  };