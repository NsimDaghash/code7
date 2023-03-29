/*
Changing letters

When provided with a String, capitalize all vowels

For example:

Input : "Hello World!"

Output : "HEllO WOrld!"

Note: Y is not a vowel in this kata.
*/

function swap(string) {
  let vowels = ["a", "e", "i", "o", "u"];
  let s = string.split("");
  for (let i = 0; i < string.length; i++) {
    if (vowels.includes(s[i])) {
      s[i] = s[i].toUpperCase();
    }
  }
  string = s.join("");
  return string;
}
