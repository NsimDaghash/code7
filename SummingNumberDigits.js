/*

Summing a number's digits

Write a function named sumDigits which takes a number as input and returns the sum of the absolute value of each of the number's decimal digits.

For example: (Input --> Output)

10 --> 1
99 --> 18
-32 --> 5
Let's assume that all numbers in the input will be integer values.
*/

function sumDigits(number) {
  let x = number.toString();
  let sum = 0;

  for (let i = 0; i < x.length; i++) {
    let digit = parseInt(x[i]);
    sum += isNaN(digit) ? 0 : Math.abs(digit);
  }

  return sum;
}
