/*

Array.prototype.reverse()

The Array's reverse() method has gone missing! Re-write it, quick-sharp!

When this method is called, it reverses the order of the items in the original array. Then then it returns that same, original array. No new arrays should need to be created to pass this kata.

Here's an example:

var input = [1, 2, 3, 4];
input.reverse(); // == [4, 3, 2, 1]  // returned by .reverse()
input;           // == [4, 3, 2, 1]  // items reordered in the original array
*/
Array.prototype.reverse = function () {
  let tmp;
  for (let i = this.length - 1, j = 0; i > 0, j < i; i--, j++) {
    tmp = this[i];
    this[i] = this[j];
    this[j] = tmp;
  }
  return this;
};
