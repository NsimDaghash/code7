/*

Sum a list but ignore any duplicates

Please write a function that sums a list, but ignores any duplicate items in the list.

For instance, for the list [3, 4, 3, 6] , the function should return 10.
*/

function sumNoDuplicates(numList) {
  let sum =0;
  let flag= 0;
  let newArr = [];
  for(let i=0;i<numList.length;i++){
    for(let j=i;j<numList.length;j++ ){
      if (numList[i] == numList[j]){
        flag = 1;
      }
    }
    if (flag==0){
      newArr.push(numList[i])
    }
    flag=0;
  }
    for(let i=0;i<newArr.length;i++){
    sum=sum+newArr[i];
  }
  return sum;
}