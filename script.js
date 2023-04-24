//function book(title, author, pages){
  //  this.title = 'The hobbit'
  //  this.author = 'J.R.R. Tolkein'
 //   this.pages = '295 pages'
 //   this.info =function(){
 //       console.log(title)
 //  }
//}


function Book(title, author, pages){
    this.title = title
    this.author = author
    this.pages = pages
    this.info = function(){
     return title + ' by ' + author + ', ' + pages + ' pages';
    }
 }
 
 const theHobbit = new Book('The Hobbit','JRR Tolkein', '295')
 const harryPotter = new Book('Harry Potter', 'JK Rowling', '599')
 const gameOfThrones = new Book('Game of thrones', 'GRRM', '700')
 theHobbit.info()
 harryPotter.info()
 gameOfThrones.info()
 