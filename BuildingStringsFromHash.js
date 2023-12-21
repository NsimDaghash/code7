/*
Building Strings From a Hash

Complete the solution so that it takes the object (JavaScript/CoffeeScript) or hash (ruby) passed in and generates a human readable string from its key/value pairs.

The format should be "KEY = VALUE". Each key/value pair should be separated by a comma except for the last pair.

Example:

solution({a: 1, b: '2'}) // should return "a = 1,b = 2"
*/

function solution(pairs) {
  // Convert the object's key/value pairs into an array of strings
  const pairsArray = Object.entries(pairs).map(
    ([key, value]) => `${key} = ${value}`
  );

  // Join the array into a single string with commas as separators
  const result = pairsArray.join(",");

  return result;
}
