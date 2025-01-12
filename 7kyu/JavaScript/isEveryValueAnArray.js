/*
https://www.codewars.com/kata/582c81d982a0a65424000201/train/javascript
Is every value in the array an array?

This should only test the second array dimension of the array. The values of the nested arrays don't have to be arrays.

Examples:

[[1],[2]] => true
['1','2'] => false
[{1:1},{2:2}] => false
*/

// for every element in the arr, check if the element is an array. if they all are, return true. else false
const arrCheck = arr => arr.every(el => Array.isArray(el))