const myLibrary = [];

function Book(title, author, numOfPages = 1, isRead='No') {
    this['Title'] = title;
    this['Author'] = author;
    this['Number of Pages'] = numOfPages;
    this['Have You Read It'] = isRead;
}

function addBookToLibrary(title, author, numOfPages, isRead) {
    for (let i = myLibrary.length; i >= myLibrary.length; i--) {
        const newBook = new Book(title, author, numOfPages, isRead);
        myLibrary.push(newBook);
    }
}

addBookToLibrary('The Hobbit', 'J.R.R Tolkien', 295, 'yes');
addBookToLibrary('The Fellowship of the Rings', 'J.R.R Tolkien', 457, 'yes');
addBookToLibrary('All Systems Red', 'Martha Wells', 400, 'yes');
addBookToLibrary('Harry Potter and the Chamber of Secrets', 'J.K. Rowling', 450);

// console.log(myLibrary);
function displayBook() {
    for (const book of myLibrary) {
        const card = document.createElement('section');
        card.classList.add('book-card');
        for (const key in book) {
            const para = document.createElement('p');
            para.textContent = `${key}: ${book[key]}`;
            card.appendChild(para);
        }
        const body = document.querySelector('body');
        body.appendChild(card);
    }
}

displayBook();