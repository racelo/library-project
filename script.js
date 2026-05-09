const myLibrary = [];

function Book(title, author, pages, readStatus) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.readStatus = readStatus;
    this.bookID = crypto.randomUUID();
}

function addBookToLibrary(title, author, pages, readStatus, arr) {
    let book = new Book(title, author, pages, readStatus);
    arr.push(book);
}

addBookToLibrary("The Hobbit", "J.R.R. Tolkien", 295, "read", myLibrary)
addBookToLibrary("Deep Work", "Cal Newport", 296, "read", myLibrary)

// console.log(myLibrary);

const tblBody = document.querySelector("tbody");

function displayBooks(arr) {
    for(let book of arr) {
        const row = document.createElement("tr");
        for (let key in book) {
            if(key === "bookID") continue;
            const cell = document.createElement("td");
            const cellText = document.createTextNode(book[key]);
            cell.appendChild(cellText)
            row.appendChild(cell);
        }
        tblBody.appendChild(row);
    }
}

displayBooks(myLibrary)