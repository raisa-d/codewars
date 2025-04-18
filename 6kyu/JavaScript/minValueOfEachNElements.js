/*
Complete the function. Two arguments will be given:

arr: An array that contains some integers (positve,negative or zero).
n: A positive integer. 1 <= n <= arr.length.
Your task is to find the minimum value of each n adjacent elements in arr. Returns by a new array. For example:

arr = [1,2,3,10,-5], n = 2   ==>  [1,2,3,-5]
# The min value of each 2 adjacent elements are:
[(1,2)...]   --> 1
[.(2,3)..]   --> 2
[..(3,10).]  --> 3
[...(10,-5)] --> -5

Examples
[1,-2,3,-4,5,-6,7,8], 1  ==>  [1,-2,3,-4,5,-6,7,8]
[1,-2,3,-4,5,-6,7,8], 2  ==>  [-2,-2,-4,-4,-6,-6,7]
[1,-2,3,-4,5,-6,7,8], 3  ==>  [-2,-4,-4,-6,-6,-6]
[1,-2,3,-4,5,-6,7,8], 4  ==>  [-4,-4,-6,-6,-6]

Note: You can assume that all inputs are valid.
*/

function minValue(arr,n) {
  let newArr = [];
  for(let i = 0; i <= arr.length-n; i++) {
    newArr.push(Math.min(...arr.slice(i, i+n)))
  }
  return newArr
}
