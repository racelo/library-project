const myLibrary = [];
const tblBody = document.querySelector("tbody");
const dialog = document.getElementById("dialog")
const formElem = document.querySelector("form");

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

formElem.addEventListener("submit", (e) => {
    e.preventDefault();

    new FormData(myForm)

    myForm.reset();
    dialog.close();

    displayBooks(myLibrary);
})

myForm.addEventListener("formdata", (e) => {
    // console.log("formdata fired");

    const data = e.formData;
    const formValues = [];
    for( const value of data.values()) {
        formValues.push(value); 
    }
    // console.log(formValues);
    addBookToLibrary(...formValues, myLibrary); 
})

