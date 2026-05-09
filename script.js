const myLibrary = [];

function Book(title, author, pages, readStatus) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.readStatus = readStatus;
}

function addBookToLibrary(title, author, pages, readStatus, arr) {
    let book = new Book(title, author, pages, readStatus);
    arr.push(book);
}

addBookToLibrary("The Hobbit", "J.R.R. Tolkien", 295, "read", myLibrary)
addBookToLibrary("Deep Work", "Cal Newport", 296, "read", myLibrary)

console.log(myLibrary);