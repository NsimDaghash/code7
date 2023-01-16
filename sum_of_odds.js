/*
Sum of odd numbers

Given the triangle of consecutive odd numbers:

             1
          3     5
       7     9    11
   13    15    17    19
21    23    25    27    29
...
Calculate the sum of the numbers in the nth row of this triangle (starting at index 1) e.g.: (Input --> Output)

1 -->  1
2 --> 3 + 5 = 8
*/

function rowSumOddNumbers(n) {
  if (n == 1) {
    return n;
  }
  let startNum = 0,
    tolalSum = 0;
  for (let i = 1; i < n; i++) {
    startNum = startNum + i;
    console.log("8. ", startNum);
  }
  startNum = startNum * 2 + 1;
  console.log("1. ", tolalSum);
  for (let i = 0; i < n; i++) {
    tolalSum = tolalSum +(i*2+ startNum) ;
  }
  return tolalSum;
}

let n = 6;
console.log(rowSumOddNumbers(n));
