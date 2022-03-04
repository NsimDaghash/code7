/*
The first input array is the key to the correct answers to an exam, like ["a", "a", "b", "d"]. The second one contains a student's submitted answers.

The two arrays are not empty and are the same length. Return the score for this array of answers, giving +4 for each correct answer, -1 for each incorrect answer, and +0 for each blank answer, represented as an empty string (in C the space character is used).

If the score < 0, return 0.

For example:

checkExam(["a", "a", "b", "b"], ["a", "c", "b", "d"]) → 6
checkExam(["a", "a", "c", "b"], ["a", "a", "b",  ""]) → 7
checkExam(["a", "a", "b", "c"], ["a", "a", "b", "c"]) → 16
checkExam(["b", "c", "b", "a"], ["",  "a", "a", "c"]) → 0
*/
function checkExam(array1, array2) {
    let score = 0;
      for(let i = 0; i < array1.length; i++) { 
          if(array1[i] === array2[i]){    // correct answere give 4 points 
          score += 4;
          }
          else if(array2[i] === ""){   // an empty answere - no points
          score += 0;
          }
          else {                     //for wrong answere, minus 1 point from their score
          score -= 1
          }
      }

      if(score < 0){        //if the score is a negative number (below 0), just return 0 as the score
      score = 0;
      };
      return score;
}