/*
Power of 4
Write a method that returns true if a given parameter is a power of 4, and false if it's not. If parameter is not an Integer (eg String, Array) method should return false as well.

(In C# Integer means all integer Types like Int16,Int32,.....)

Examples
powerOf4(1024) // returns true
powerOf4(44) // returns false
powerOf4("not a positive integer") // returns false
*/
function powerOf4(num) {
  if (typeof num !== "number" || num <= 0 || num % 1 !== 0) {
    return false;
  }

  while (num !== 1) {
    if (num % 4 !== 0) {
      return false;
    }
    num /= 4;
  }

  return true;
}

console.log(powerOf4(4)); ///, true);
console.log(powerOf4(16)); ////, true, "4^4 = 16");
console.log(powerOf4(1)); ////, true, "Four to the power of 0 is 1");
console.log(powerOf4(20)); ///, false, "20 is not a power of 4");
console.log(powerOf4(44)); ///, false, "44 is not a power of 4");
console.log(powerOf4(3.1415)); //, false);
console.log(powerOf4("1")); //, false, "Should return false for strings");
console.log(powerOf4("4")); //, false, "Should return false for strings");
console.log(powerOf4(null)); //, false, "Should return false for non-numbers");
console.log(powerOf4(undefined)); //, false, "Should return false for non-numbers");
