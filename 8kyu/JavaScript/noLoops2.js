/*
https://www.codewars.com/kata/57cc40b2f8392dbf2a0003ce/train/javascript

You will be given an array a and a value x. All you need to do is check whether the provided array contains the value, without using a loop.

Array can contain numbers or strings. x can be either. Return true if the array contains the value, false if not. With strings you will need to account for case.
*/

const check = (a,x) => a.includes(x);
