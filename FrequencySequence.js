/*

Frequency sequence

Your task is to return an output string that translates an input string s by 
replacing each character in s with a number representing the number of times that 
character occurs in s and separating each number with the sep character(s).

Example (s, sep --> Output)

"hello world", "-" --> "1-1-3-3-2-1-1-2-1-3-1"
"19999999"   , ":" --> "1:7:7:7:7:7:7:7"
"^^^**$"     , "x" --> "3x3x3x2x2x1"
*/

function freqSeq(str, sep) {
  let count = 0;
  let result = "";
  for (let i = 0; i < str.length; i++) {
    count = 0;
    for (let j = 0; j < str.length; j++) {
      if (str[i] == str[j]) {
        count++;
      }
    }
    if (result == "") {
      result = result + count;
    } else {
      result = result + sep + count;
    }
  }
  return result;
}
