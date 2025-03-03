const myLibrary = [];
const newBookBtn = document.querySelector('.new-book-button');
const modal = document.querySelector('dialog');
const submitBtn = document.querySelector('.new-book-form button');

function Book(title, author, numOfPages = 1, isRead = 'No') {
    if (isRead === 'yes') { isRead = 'Yes'; }
    if (isRead === 'no') { isRead = 'No'; }

    this['Title'] = title;
    this['Author'] = author;
    this['Number of Pages'] = numOfPages;
    this['Have You Read It'] = isRead;
}

function addBookToLibrary(title, author, numOfPages, isRead) {
    const newBook = new Book(title, author, numOfPages, isRead);
    myLibrary.push(newBook);
}

// addBookToLibrary('The Hobbit', 'J.R.R Tolkien', 295, 'yes');
// addBookToLibrary('The Fellowship of the Rings', 'J.R.R Tolkien', 457, 'yes');
// addBookToLibrary('All Systems Red', 'Martha Wells', 400, 'yes');
// addBookToLibrary('Harry Potter and the Chamber of Secrets', 'J.K. Rowling', 450);

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

newBookBtn.addEventListener('click', () => {
    modal.showModal();
});

submitBtn.addEventListener('click', (event) => {
    event.preventDefault(); // We don't want to submit the form

    const title = document.querySelector('#title');
    const author = document.querySelector('#author');
    const numOfPages = document.querySelector('#pages');
    const hasRead = document.querySelector('#read');

    addBookToLibrary(title.value, author.value, numOfPages.value, hasRead.value);
    title.value = "";
    author.value = "";
    numOfPages.value = "";
    hasRead.value = "";
    // displayBook();
    modal.close();
});
