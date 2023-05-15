//function book(title, author, pages){
  //  this.title = 'The hobbit'
  //  this.author = 'J.R.R. Tolkein'
 //   this.pages = '295 pages'
 //   this.info =function(){
 //       console.log(title)
 //  }
//}

let myLibrary = [];

class Book(title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
}

function addBookToLibrary(event) {
  event.preventDefault();
  const title = document.querySelector('#title').value;
  const author = document.querySelector('#author').value;
  const pages = document.querySelector('#pages').value;
  const read = document.querySelector('#read').checked;
  const book = new Book(title, author, pages, read);
  myLibrary.push(book);
  render();
}

function render() {
  const booksGrid = document.querySelector('#booksGrid');
  booksGrid.innerHTML = '';
  for (let i = 0; i < myLibrary.length; i++) {
    const book = myLibrary[i];
    const card = document.createElement('div');
    card.classList.add('card');
    const title = document.createElement('h2');
    title.textContent = book.title;
    const author = document.createElement('p');
    author.textContent = `Author: ${book.author}`;
    const pages = document.createElement('p');
    pages.textContent = `Pages: ${book.pages}`;
    const read = document.createElement('p');
    read.textContent = `Read: ${book.read ? 'Yes' : 'No'}`;
    const removeBtn = document.createElement('button');
    removeBtn.textContent = 'Remove';
    removeBtn.addEventListener('click', () => {
      myLibrary.splice(i, 1);
      render();
    });
    const toggleBtn = document.createElement('button');
    toggleBtn.textContent = 'Toggle read';
    toggleBtn.addEventListener('click', () => {
      book.read = !book.read;
      render();
    });
    card.appendChild(title);
    card.appendChild(author);
    card.appendChild(pages);
    card.appendChild(read);
    card.appendChild(removeBtn);
    card.appendChild(toggleBtn);
    booksGrid.appendChild(card);
  }
}

const addBookBtn = document.querySelector('#addBookBtn');
const overlay = document.querySelector('#overlay');
const form = document.querySelector('form');
const cancelBtn = document.querySelector('#cancel-btn');

addBookBtn.addEventListener('click', () => {
  overlay.style.display = 'block';
});

cancelBtn.addEventListener('click', () => {
  overlay.style.display = 'none';
});

form.addEventListener('submit', addBookToLibrary);
  