/*
https://www.codewars.com/kata/582e4c3406e37fcc770001ad/train/javascript
ES6 has introduced another way of joining strings. Your task is to find out what this is and write a function that will add two strings together, there must be a space between the two strings.

+ , .concat() & .join() will not be allowed in this exercise. I have also removed some other methods that can be used to cheat!

If one of the arguments is a number your code must coerce it into being a string.
*/

const joinStrings = (string1, string2) => `${string1} ${string2}`;