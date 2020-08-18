/**

** Exercise 4: Guess more **

Look at the bellow code snippet.
Can you guess the output? 
Write out your reasoning in 50 words or less.

*/

const x = 9;

function f1(val) {
  val = val + 1;
  return val;
}
f1(x);
console.log(x); // 9 Because we didn't cahnge value of x. When we refers to simple variable (num, boolean, string) we refers to the value

const y = {
  x: 9
};

function f2(val) {
  val.x = val.x + 1;
  return val;
}
f2(y);
console.log(y); // 10 Because we changed value at memory location of object "y". When we refers to objects or arrays, we refers to the location in memory. 


//Source: http://adripofjavascript.com/blog/drips/object-equality-in-javascript.html
// This article is about comparing, but it's the same logic when we put variable in function - there are different approach how to reffer to simple and complex variables.