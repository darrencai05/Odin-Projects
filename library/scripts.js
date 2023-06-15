const addButton = document.querySelector('.add')
const popup = document.querySelector('.popup')
const closeButton = document.querySelector('.close')
const form = document.querySelector('#form')
const cardContainer = document.querySelector('.card-container')
const deleteButtons = document.querySelectorAll('.delete')
const header = document.querySelector('.newbook')


let savedBooks = JSON.parse(localStorage.getItem('books')) || []


class Book{
    constructor(title, author, pages, read){
        this.title = title;
        this.author = author;
        this.pages = pages;
        this.read = read;
    }
}

function showForm(){
    if (updatestatus == true){
        header.innerText = ('Update Book')
        popup.style.display = 'block'
    }
    else{
        header.innerText = ('New Book')
        popup.style.display = 'block'
    }
}

function reset(){
    if (updatestatus == true){
        updatestatus = false;
    }
    
    popup.style.display = 'none'
    form.reset();
}

function createBook(){
    book = new Book(form.title.value, form.author.value, form.pages.value, form.read.value)
    if (updatestatus == true){
        savedBooks[cardIndex] = book;
        localStorage.setItem('books', JSON.stringify(savedBooks));
        render();
        updatestatus = false;
    }
    else{
    
    savedBooks.push(book);
    localStorage.setItem('books', JSON.stringify(savedBooks));
    render();
    }   

}


function render(){

    cardContainer.innerHTML= '';
    savedBooks.forEach((x, i) =>{
        

        const card = document.createElement('div');
        card.classList.add('card');

        const cardTitle = document.createElement('div');
        cardTitle.classList.add('card-title');
        cardTitle.innerText = ('Title: ' + x.title);

        const cardAuthor = document.createElement('div');
        cardAuthor.classList.add('card-author');
        cardAuthor.innerText = ('Author: ' + x.author);

        const cardPages = document.createElement('div');
        cardPages.classList.add('card-pages');
        cardPages.innerText = ('Pages: ' + x.pages);

        const cardStatus = document.createElement('div');
        cardStatus.classList.add('read-status');
        cardStatus.innerText = ('Read? ' + x.read);

        const cardUpdates = document.createElement('div');
        cardUpdates.classList.add('updates');
        const update = document.createElement('button')
        update.classList.add('update')
        update.setAttribute('data-index', i);
        update.type = "button"
        update.innerText = "Update"
        update.addEventListener('click', updateCard)
        const deleteButton = document.createElement('button')
        deleteButton.classList.add('delete')
        deleteButton.type = 'button'
        deleteButton.innerText = 'Delete'
        deleteButton.setAttribute('data-index', i);
        deleteButton.addEventListener('click', deleteCard)
        
        cardContainer.append(card);
        card.append(cardTitle, cardAuthor, cardPages, cardStatus, cardUpdates)
        cardUpdates.append(update, deleteButton)

        
    
    })
    
}

function deleteCard() {
    savedBooks.splice(this.dataset.index, 1)
    localStorage.setItem('books', JSON.stringify(savedBooks));
    render();
    
    
}

function updateCard(){
    
    updatestatus = true;
    cardIndex = this.dataset.index;
    showForm();
}


addButton.addEventListener('click', showForm)
closeButton.addEventListener('click', reset)

deleteButtons.forEach(x => {
   
})

form.addEventListener('submit', function(e, i){
    
    e.preventDefault();
    createBook();
    reset();
})

window.addEventListener('load', render)