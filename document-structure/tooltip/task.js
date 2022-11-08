

const linkA = document.querySelectorAll('a');
linkA.forEach((item) => {
    const title = item.title;
    const blockTitle = document.createElement('div');
    blockTitle.setAttribute('class', 'tooltip');
    blockTitle.innerText = title;
    item.insertAdjacentElement('afterend', blockTitle);

    item.addEventListener('click', addTooltip);
})


function addTooltip(event) {
    event.preventDefault();
    const linkA = document.querySelectorAll('a');
    linkA.forEach((item) => {
        if (item === this) {
            let nextBlock = item.nextElementSibling
            nextBlock.classList.toggle('tooltip_active');
            nextBlock.style.left = item.offsetLeft + 'px';
        } else {
            item.nextElementSibling.classList.remove('tooltip_active');
        }
    });

}

