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
const tbleNodeList = Array.from(tblBody.childNodes);

function displayBooks(arr) {
    for(let book of arr) {
        const row = document.createElement("tr");
        for (let key in book) {
            if(key === "bookID") {
                row.dataset.id = book[key];
                continue;
            }
            const cell = document.createElement("td");
            const cellText = document.createTextNode(book[key]);
            cell.appendChild(cellText)
            row.appendChild(cell);
        }
        if (!Array.from(tblBody.childNodes).map(n => n.dataset.id).includes(row.dataset.id)) {
            tblBody.appendChild(row);  
        }
     
    }
}


const newBook = document.getElementById("createBook");
const submitBtn = document.getElementById("submit");
const dialog = document.getElementById("dialog")


const input = document.querySelectorAll("input");

const myForm = document.getElementById("myForm");

submitBtn.addEventListener("click", (e) => {
    e.preventDefault();
    const newBookVal = [];
    for(let i = 0; i < input.length; i++){
        newBookVal.push(input[i].value)
    }
    addBookToLibrary(...newBookVal, myLibrary);
    displayBooks(myLibrary);

    myForm.reset();
    dialog.close();
})

// displayBooks(myLibrary)


