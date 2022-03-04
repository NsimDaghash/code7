/*
Simple, given a string of words, return the length of the shortest word(s).

String will never be empty and you do not need to account for different data types.
*/
function findShort(s){
    let arr = s.split(' ');  // split the strings by word to array
    let smallest = arr[0];   // set the length of the smallest word equal to the first word 
    let i;
    for (i = 0; i < arr.length; i++) {
      if(arr[i].length < smallest.length){
        smallest = arr[i];
      }
    }
    return (smallest.length);
  }
  