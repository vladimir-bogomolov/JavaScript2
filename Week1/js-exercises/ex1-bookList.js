/**
  
 ** Exercise 1: The book list **

  I 'd like to display my three favorite books inside a nice webpage!

  1. Iterate through the array of books.
  2. For each book, create a `<p>`
  element with the book title and author and append it to the page.
  3. Use a `<ul>`  and `<li>` to display the books.
  4. Add an `<img>` to each book that links to a URL of the book cover.
  5. Change the style of the book depending on whether you have read it(green) or not(red).

  The end result should look something like this:
  https: //hyf-js2-week1-makeme-ex1-demo.herokuapp.com/

  */

function createBookList(books) {
  // your code goes in here, return the ul element
  let bookList = document.createElement('ul');
  bookList.style.listStyle = 'none';
  bookList.style.display = 'flex';
  bookList.style.justifyContent = 'flex-start';
  bookList.style.flexWrap = 'wrap';
  for (let book of books) {
      let bookListItem = document.createElement('li');
      let bookName = document.createElement('p');
      bookName.innerText = book.title + ' - ' + book.author;
      bookListItem.appendChild(bookName);
      let bookImage = document.createElement('img');
      bookImage.src = book.title + '.jpg';
      bookListItem.appendChild(bookImage);
      bookList.appendChild(bookListItem);
      if (book.alreadyRead) {bookListItem.style.background = 'green';} else {
        bookListItem.style.background = 'red';
      }
      bookListItem.style.width = '350px';
      bookListItem.style.margin = '20px';
      bookListItem.style.padding = '10px';
  }

  return bookList;
}

const books = [{
    title: 'The Design of Everyday Things',
    author: 'Don Norman',
    alreadyRead: false
  },
  {
    title: 'The Most Human Human',
    author: 'Brian Christian',
    alreadyRead: true
  },
  {
    title: 'The Pragmatic Programmer',
    author: 'Andrew Hunt',
    alreadyRead: true
  }
];

let ulElement = createBookList(books);

document.querySelector("#bookList").appendChild(ulElement);