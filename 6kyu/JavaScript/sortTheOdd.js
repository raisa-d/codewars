/*
Task
You will be given an array of numbers. You have to sort the odd numbers in ascending order while leaving the even numbers at their original positions.

Examples
[7, 1]  =>  [1, 7]
[5, 8, 6, 3, 4]  =>  [3, 8, 6, 5, 4]
[9, 8, 7, 6, 5, 4, 3, 2, 1, 0]  =>  [1, 8, 3, 6, 5, 4, 7, 2, 9, 0]
*/

const sortArray = a => {
  // first, sort array of just odd nums
  const oddNums = a.filter(e => e % 2 !== 0).sort((a, b) => a - b);
  // map array, if the num is even, map to element, otherwise use the first value from oddNums
  return a.map(e => e % 2 === 0 ? e : oddNums.shift());
};
