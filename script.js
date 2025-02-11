const myLibrary = new Set();

function Book(title, author, pageCount, isRead) {
    this.title = title;
    this.author = author;
    this.pageCount = pageCount;
    this.isRead = isRead;
}

function addBookToLibrary(title, author, pageCount, isRead) {
    const newBook = new Book(title, author, pageCount, isRead);
    myLibrary.add(newBook);
}

addBookToLibrary("The Hobbit", "J.R.R. Tolkien", 295, false);
addBookToLibrary("El perquè de tot plegat", "Quim Monzó", 176, true)

const bookshelf = document.querySelector("#bookshelf");
myLibrary.forEach(book => {
    const bookDiv = document.createElement('button');
    bookDiv.classList.add('book');
    bookDiv.addEventListener('pointerdown', () => openBookModal(book))
    bookDiv.textContent = `${book.title} - ${book.author}`;
    bookshelf.appendChild(bookDiv);
});

const bookModal = document.querySelector("#book-modal");
const openBookModal = (book) => {
    bookModal.querySelector(".title").textContent = book.title;
    bookModal.querySelector(".author").textContent = `by ${book.author}`;
    bookModal.querySelector(".page-count").textContent = `${book.pageCount} pages`;
    bookModal.querySelector(".is-read").textContent = `${book.isRead ? "Already read" : "Not read yet"}`;
    bookModal.showModal();
}
