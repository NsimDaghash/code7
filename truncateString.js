/*

Truncate the given string (first argument) if it is longer than the given maximum length (second argument). Return the truncated string with a "..." ending.

Note that inserting the three dots to the end will add to the string length.

However, if the given maximum string length num is less than or equal to 3, then the addition of the three dots does not add to the string length in determining the truncated string.

Examples
('codewars', 9)  ==>  'codewars'
('codewars', 7)  ==>  'code...'
('codewars', 2)  ==>  'co...'
*/

function truncateString(str, num) {
  // Clear out that junk in your trunk
  if (num > str.length) {
    console.log(str);
    return str;
  }
  if (num <= 3) {
    console.log("num<=3");
    return str.substr(0, num) + "...";
  }

  console.log("nasim");
  str = str.substr(0, num - 3) + "...";
  return str;
}

let str = "A-tisket a-tasket A green and yellow basket",
  num = 43;
console.log(truncateString(str, num));
