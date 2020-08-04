/**
 
 ** Exercise 2: About me **

 1. See HTML
 2. Change the body tag 's style so it has a font-family of "Arial, sans-serif".
 3. Replace each of the spans(nickname, fav - food, hometown) with your own information.
 4. Iterate through each li and change the class to "list-item".
 5. See HTML
 6. Create a new img element and set its src attribute to a picture of you.Append that element to the page.
 */

 document.body.style.fontFamily = 'Arial, sans-serif';
 let nickname = document.createTextNode('Vladimir');
 document.getElementById('nickname').appendChild(nickname);
 let favFood = document.createTextNode('Grilled Tuna');
 document.getElementById('fav-food').appendChild(favFood);
 let homeTown = document.createTextNode('Amsterdam');
 document.getElementById('hometown').appendChild(homeTown);
 let listItems = document.querySelectorAll('li');
 Array.from(listItems).forEach(item => item.className = 'list-item');
//  Should I make step 5 here or in HTML?
// let styleTag = document.createElement('style');
// styleTag.innerHTML = '.list-item {color: red;}';
// document.head.appendChild(styleTag);
let myPicture = document.createElement('img');
myPicture.src = 'myPicture.png';
myPicture.style.width = '150px';
document.body.appendChild(myPicture);