/*
Simple Fun #137: S2N

Your task is to find the sum for the range 0 ... m for all powers from `0 ... n.

Example
For m = 2, n = 3, the result should be 20

0^0+1^0+2^0 + 0^1+1^1+2^1 + 0^2+1^2+2^2 + 0^3+1^3+2^3 = 20

Note, that no output ever exceeds 2e9.

Input/Output
[input] integer m
0 <= m <= 50000

[input] integer n
0 <= n <= 9
*/

function S2N(m, n) {
  let result = 0;
  for (let i = 0; i <= m; i++) {
    for (let j = 0; j <= n; j++) {
      result += Math.pow(i, j);
      if (result > 2e9) return "Result exceeds 2e9";
    }
  }
  return result;
}
