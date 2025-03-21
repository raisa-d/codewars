/*
https://www.codewars.com/kata/598d91785d4ce3ec4f000018/train/javascript
You will be given a list of strings and your task will be to return the values of the strings as explained above multiplied by the position of that string in the list. For our purpose, position begins with 1.

["abc", "abc abc"] should return [6, 24] because of [ 6 * 1, 12 * 2 ]. Note how spaces are ignored.

"abc" has a value of 6, while "abc abc" has a value of 12. Now, the value at position 1 is multiplied by 1 while the value at position 2 is multiplied by 2.

Input will only contain lowercase characters and spaces.

Good luck!
*/

// SOLUTION 1: brute force, quadratic complexity

// scoreWord is O(n)
function scoreWord(str, pos) {
  const alpha = 'abcdefghijklmnopqrstuvwxyz'
  let score = 0;
  // loop through string
  for(const char of str) {
    // add up score
    score += alpha.indexOf(char)+1;
  };
  // return score * position
  return score*pos
};

// arr of str -> arr with scores
function wordValue(arr) {
  let res = [];
  // loop thru arr
  for(let i = 0; i < arr.length; i++) {
    // call scoreWord
    let score = scoreWord(arr[i], i+1);
    // add score to result
    res.push(score)
  };
  return res
};

console.log(wordValue(['abc'], [6]));
console.log(wordValue(['abc', 'abc abc'], [6, 24]));
