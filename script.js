const myLibrary = new Set();

function Book(title, author, pageCount, isRead) {
    this.title = title;
    this.author = author;
    this.pageCount = pageCount;
    this.isRead = isRead;
}

Book.prototype.info = function () { // for debugging
    return `"${this.title}" by ${this.author}, ${this.pageCount} pages, ${this.isRead ? "already read" : "not read yet"}`;
}

function addBookToLibrary(title, author, pageCount, isRead) {
    const newBook = new Book(title, author, pageCount, isRead);
    myLibrary.add(newBook);
}

addBookToLibrary("The Hobbit", "J.R.R. Tolkien", 295, false);
addBookToLibrary("El perquè de tot plegat", "Quim Monzó", 176, true)
myLibrary.forEach(book => console.log(book.info()))
