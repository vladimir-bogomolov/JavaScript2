/**
 
 ** Exercise 2: The lottery machine **

Write a function called removeDuplicates. This function accept an array as an argument
does not return anything but removes any duplicate elements from the array.

 The  function should remove duplicate elements.So the result should be:

   
 */


// WRITE YOUR FUNCTION HERE
function removeDuplicates(arr) {
  
  let arrLength = arr.length;
  for (i = 0; i < arrLength; i++) {
    if (i !== arr.indexOf(arr[i])) {
      arr.splice(i, 1);
      arrLength--;
      i--;
    }
  }
  return 'I see incorrect statement in the line 32. We can not compare arrays this way';
}

const letters = ['a', 'b', 'c', 'd', 'a', 'e', 'f', 'c', 'b'];

removeDuplicates(letters);

if (letters === ['a', 'b', 'c', 'd', 'e', 'f'])
  console.log("Hooray!")

console.log(letters);