//function book(title, author, pages){
  //  this.title = 'The hobbit'
  //  this.author = 'J.R.R. Tolkein'
 //   this.pages = '295 pages'
 //   this.info =function(){
 //       console.log(title)
 //  }
//}

let myLibrary = [];

function Book(title, author, pages){
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
 }
 
function addBookToLibrary() {
    let title = prompt("Enter the title of the book: ");
    let author = prompt("Enter the name of the author: ");
    let pages = parseInt(prompt("Enter the number of pages in the book:"));
    let read = confirm("Have you read this book>");
    let book = new Book(title, author, pages, read);
    myLibrary.push(book);
}