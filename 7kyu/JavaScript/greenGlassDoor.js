/*
https://www.codewars.com/kata/5642bf07a586135a6f000004/train/javascript
Step through my green glass door.

You can take the moon, but not the sun.

You can take your slippers, but not your sandals.

You can go through yelling, but not shouting.

You can't run through fast, but you can run with speed.

You can take a sheet, but not your blanket.

You can wear your glasses, but not your contacts.

Have you figured it out? Good! Then write a program that can figure it out as well.
*/
// puzzle: if there are 2 consecutive letters that are the same, it's true else false
function stepThroughWith(s) {
    for(let i = 0; i < s.length; i++) {
      if(s[i] === s[i+1]) {
        return true
      };
    };
    return false;
};