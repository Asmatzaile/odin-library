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

const drawLibrary = () => {
    const bookshelf = document.querySelector("#bookshelf");
    bookshelf.textContent = "";
    myLibrary.forEach(book => {
        const bookDiv = document.createElement('button');
        bookDiv.classList.add('book');
        bookDiv.addEventListener('pointerdown', () => openBookModal(book))
        bookDiv.textContent = `${book.title} - ${book.author}`;
        bookshelf.appendChild(bookDiv);
    });
}
drawLibrary();


const bookModal = document.querySelector("#book-modal");
const openBookModal = (book) => {
    const titleField = bookModal.querySelector(".title > [contenteditable]");
    const authorField = bookModal.querySelector(".author > [contenteditable]");
    const pageCountField = bookModal.querySelector(".page-count > [contenteditable]");
    const isReadField = bookModal.querySelector(".is-read");
    titleField.textContent = book.title;
    authorField.textContent = book.author;
    pageCountField.textContent = book.pageCount;
    isReadField.textContent = `${book.isRead ? "Already read" : "Not read yet"}`;
    bookModal.querySelector("button").onclick = () => {
        book.title = titleField.textContent;
        book.author = authorField.textContent;
        book.pageCount = pageCountField.textContent;
        drawLibrary();
    }
    bookModal.showModal();
}
