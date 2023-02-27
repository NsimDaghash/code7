/*

16+18=214

For this kata you will have to forget how to add two numbers.

It can be best explained using the following meme:

Dayane Rivas adding up a sum while competing in the Guatemalan television show "Combate" in May 2016

In simple terms, our method does not like the principle of carrying over numbers and just writes down every number it calculates :-)

You may assume both integers are positive integers.
*/

function add(num1, num2) {
  num1 = num1.toString();
  num2 = num2.toString();
  let leng = Math.max(num1.length, num2.length);
  let result = "";
  for (let i = leng - 1; i >= 0; --i) {
    let indexNum1 = num1.length - (i + 1);
    let indexNum2 = num2.length - (i + 1);

    let valueNum1 = indexNum1 >= 0 ? parseInt(num1[indexNum1]) : 0;
    let valueNum2 = indexNum2 >= 0 ? parseInt(num2[indexNum2]) : 0;

    result += valueNum1 + valueNum2;
  }

  return +result;
}
