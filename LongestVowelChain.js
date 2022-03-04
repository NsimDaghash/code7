/*
The vowel substrings in the word codewarriors are o,e,a,io. The longest of these has a length of 2. Given a lowercase string that has alphabetic characters only (both vowels and consonants) and no spaces, return the length of the longest vowel substring. Vowels are any of aeiou.

Good luck!

If you like substring Katas, please try:

Non-even substrings

Vowel-consonant lexicon
*/
function solve(s){
    let count = 0
    let max = 0
    for (let i = 0; i < s.length; ++i) {   // run at the string
      if ("aeiou".includes(s[i])) {      // check if its avowel letter 
        count++                         // count it
        if (count > max) {
          max = count                  // max it the amount of vowel letters substring
        }
      } else {
        count = 0                     // if its not avowel letter 
      }
    }
    return max                    // return the length of the substring of vowel letters
  }