/*
Implement a function that returns the minimal and the maximal value of a list (in this order).
*/
function getMinMax(arr){
    let [min,max] = [arr[0],arr[0]]; // tak the first value in the array , to insure that the value within the array 
    
    for(let i = 0; i < arr.length; i++) {
      if (arr[i] > max) 
        max = arr[i]
      else if(arr[i] < min)
        min = arr[i]
    }
   
    return [min, max];
}
