function strong(n) {
  let tmp = n + "";
  tmp = tmp.split("");
  let t = 0,
    tf = 0;
  //   for (let i = 0; i < tmp.length; i++) {
  //     t = t + +tmp[i];
  //   }
  let result = 1;
  if (n < 3) {
    return "STRONG!!!!";
  }
  for (let i = 0; i <= tmp.length; i++) {
    for (let j = parseInt(tmp[i]); j > 0; j--) {
      result = result * j;
      console.log(j);
    }
    tf = tf + result;
    //  console.log(tf);
  }
  if (n == tf) {
    return "STRONG!!!!";
  } else {
    return "Not Strong !!";
  }
}

let n = 145;
console.log(strong(n));
