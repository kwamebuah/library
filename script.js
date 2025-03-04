const myLibrary = [];
const newBookBtn = document.querySelector('.new-book-button');
const modal = document.querySelector('dialog');
const submitBtn = document.querySelector('.new-book-form button');

function Book(title, author, numOfPages, isRead) {
    this.title = title;
    this.author = author;
    this['Pages'] = numOfPages;
    this['Read'] = isRead;
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
    let toDisplay = myLibrary.at(-1);
    const card = document.createElement('section');
    card.classList.add('book-card');
    for (const key in toDisplay) {
        const para = document.createElement('p');

        if (key === 'title') {
            para.textContent = `${toDisplay[key]}`;
        }
        else if (key === 'author') {
            para.textContent = `by ${toDisplay[key]}`;
        }
        else {
            para.textContent = `${key}: ${toDisplay[key]}`;
        }
        card.appendChild(para);
    }
    const body = document.querySelector('body');
    body.appendChild(card);
}

newBookBtn.addEventListener('click', () => {
    modal.showModal();
});

submitBtn.addEventListener('click', (event) => {
    event.preventDefault(); // We don't want to submit the form

    const title = document.querySelector('#title');
    const author = document.querySelector('#author');
    const numOfPages = document.querySelector('#pages');
    const hasRead = document.querySelector('#isRead');

    if (hasRead.checked) { hasRead.value = 'Yes'; }
    else { hasRead.value = 'No'; }

    addBookToLibrary(title.value, author.value, numOfPages.value, hasRead.value);
    title.value = "";
    author.value = "";
    numOfPages.value = "";
    hasRead.checked = false;
    displayBook();
    modal.close();
});
