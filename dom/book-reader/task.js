

const bookControls = Array.from(document.querySelectorAll('.font-size'));
bookControls.forEach((item) => {
    item.addEventListener('click', changeFont)
})

function changeFont(event) {
    event.preventDefault();
    bookControls.forEach((item) => {
        if (item === this) {
            item.classList.add('font-size_active')
        } else {
            item.classList.toggle('font-size_active', false)
        }
    })

    let fontSize = this.getAttribute('data-size')
    if (fontSize === 'big') {
        document.querySelector('.book').className = 'book book_fs-big'
    } else if (fontSize === 'small') {
        document.querySelector('.book').className = 'book book_fs-small'
    } else {
        document.querySelector('.book').className = 'book'
    }

}