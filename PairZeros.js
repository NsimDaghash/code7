/*

Pair Zeros

input: [0, 1, 0, 0]
paired: ^-----^
    -> [0, 1,    0]
  kept: ^        ^

input: [1, 0, 7, 0, 1]
paired:    ^-----^
    -> [1, 0, 7,    1]
  kept:    ^

input: [0, 1, 7, 0, 2, 2, 0, 0, 1, 0]
paired: ^--------^        ^--^
    -> [0, 1, 7,    2, 2, 0,    1, 0]
  kept: ^                 ^        ^
Notes
Pairing happens from left to right. For each pairing, the second 0 will always be paired towards the first ( right to left )
0s generated by pairing can NOT be paired again
( void where not applicable: ) Don't modify the input array or you may fail to pass the tests

*/

function pairZeros(arr) {
  let arr2 = [];
  let flag = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] == 0) {
      if (flag == 0) {
        arr2.push(arr[i]);
        flag = 1;
      } else {
        flag = 0;
      }
    }
    if (arr[i] != 0) {
      arr2.push(arr[i]);
    }
  }
  return arr2;
}
