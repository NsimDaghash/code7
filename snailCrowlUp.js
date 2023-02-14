/*

Snail crawls up

The snail crawls up the column. During the day it crawls up some distance. During the night she sleeps, so she slides down for some distance (less than crawls up during the day).

Your function takes three arguments:

The height of the column (meters)
The distance that the snail crawls during the day (meters)
The distance that the snail slides down during the night (meters)
Calculate number of day when the snail will reach the top of the column.
*/

function snail(column, day, night) {
  // your code here
  let num_of_days = 0;

  while (column > night) {
    num_of_days++;
    column = column - day + night;
  }
  return num_of_days++;
}

console.log(snail(3, 2, 1));
