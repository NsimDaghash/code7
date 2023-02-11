/*
Especially Joyful Numbers

Positive integers that are divisible exactly by the sum of their digits 
are called Harshad numbers. The first few Harshad numbers are: 
1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 12, 18, ...

We are interested in Harshad numbers where the product of its digit sum s 
and s with the digits reversed, gives the original number n. 
For example consider number 1729:

its digit sum, s = 1 + 7 + 2 + 9 = 19
reversing s = 91
and 19 * 91 = 1729 --> the number that we started with.
Complete the function which tests if a positive integer n is Harshad number, 
and returns True if the product of its digit sum and its digit sum reversed 
equals n; otherwise return False.
*/

function numberJoy(n) {
  console.log("boza");
  let newN,
    sum = 0,
    reversedSum;
  newN = n.toString();
  newN = newN.split("");
  for (let i = 0; i < newN.length; i++) {
    sum = sum + newN[i];
  }
  reversedSum = sum.split("").reverse().join("");
  reversedSum = parseInt(reversedSum);

  if (sum * reversedSum == n) {
    return true;
  } else {
    return false;
  }
}

let n = 1729;

console.log(numberJoy(n));
