const myLibrary = [];
const newBookBtn = document.querySelector('.new-book-button');
const modal = document.querySelector('dialog');
const submitBtn = document.querySelector('.new-book-form button');

class Book {
    constructor(title, author, numOfPages, isRead) {
        this.title = title;
        this.author = author;
        this['Pages'] = numOfPages;
        this['Read'] = isRead;
        this.id = myLibrary.length;
    }
}

function addBookToLibrary(title, author, numOfPages, isRead) {
    const newBook = new Book(title, author, numOfPages, isRead);
    myLibrary.push(newBook);
}

function displayBook() {
    let toDisplay = myLibrary.at(-1);
    const idxNum = toDisplay.id;
    const card = document.createElement('article');
    const readResponse = document.createElement('span');
    const readInput = document.createElement('input');
    const div1 = document.createElement('div');
    const div2 = document.createElement('div');
    const deleteBook = document.createElement('button');

    readInput.setAttribute('type', 'checkbox');

    card.classList.add('book-card');
    card.setAttribute('data-id', idxNum);

    for (const key in toDisplay) {
        if (key === 'id') { }
        else if (key === 'title') {
            const heading = document.createElement('h3');
            heading.textContent = `${toDisplay[key]}`;
            card.appendChild(heading);
        }
        else if (key === 'author') {
            const para = document.createElement('p');
            para.textContent = `by ${toDisplay[key]}`;
            card.appendChild(para);
        }
        else if (key === 'Read') {
            const para = document.createElement('p');
            para.appendChild(div1);
            div1.textContent = `${key}: `;
            div1.appendChild(readResponse);
            readResponse.textContent = `${toDisplay[key]}`;
            para.appendChild(div2);
            // Make sure checkbox shows checked if user entered read in form details
            if (toDisplay[key] === 'Yes') {
                readInput.checked = !readInput.checked;  // Checkbox is empty by default. Toggle it on
            }
            div2.appendChild(readInput);
            deleteBook.classList.add('del-book');
            deleteBook.textContent = 'x';
            div2.appendChild(deleteBook);
            card.appendChild(para);
        }
        else {
            const para = document.createElement('p');
            para.textContent = `${key}: ${toDisplay[key]}`;
            card.appendChild(para);
        }
    }

    deleteBook.addEventListener('click', () => {
        myLibrary.splice(myLibrary.findIndex(obj => obj.id === idxNum), 1);
        card.remove();
    });

    readInput.addEventListener('change', function () {
        if (this.checked) {
            myLibrary[myLibrary.findIndex(obj => obj.id === idxNum)]['Read'] = 'Yes';
            readResponse.textContent = 'Yes';
        }
        else {
            myLibrary[myLibrary.findIndex(obj => obj.id === idxNum)]['Read'] = 'No';
            readResponse.textContent = 'No';
        }
    });

    const wrapper = document.querySelector('.wrapper');
    wrapper.appendChild(card);
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

const book1 = addBookToLibrary('The Hobbit', 'J.R.R Tolkien', 295, 'No');
displayBook();
const book2 = addBookToLibrary('The Fellowship of the Rings', 'J.R.R Tolkien', 432, 'Yes');
displayBook();
const book3 = addBookToLibrary('All Systems Red', 'Martha Wells', 160, 'Yes');
displayBook();
const book4 = addBookToLibrary('Harry Potter and the Chamber of Secrets', 'J.K. Rowling', 352, 'Yes');
displayBook();
const book5 = addBookToLibrary('A Stitch in Time', 'Andrew J. Robinson', '396', 'Yes');
displayBook();
