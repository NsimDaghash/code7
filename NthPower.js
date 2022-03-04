/*
You are provided with an array of positive integers and an additional integer n (n > 1).

Calculate the sum of each value in the array to the nth power. Then subtract the sum of the original array.

Examples
{1, 2, 3}, 3  -->  (1^3 + 2^3 + 3^3 ) - (1 + 2 + 3)  -->  36 - 6  -->  30
{1, 2}, 5     -->  (1^5 + 2^5) - (1 + 2)             -->  33 - 3  -->  30
*/
function modifiedSum(a, n) {
    
    let i=0,sum=0 ,sub=0 ;
    for(i=0; i<a.length;i++){
      sum = sum + (a[i]**n);
      sub = sub + a[i];
      }
    return(sum-sub);
    
  }