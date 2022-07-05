


const listObjs = Array.from(document.querySelectorAll(".dropdown__value"));
const listItems = Array.from(document.querySelectorAll(".dropdown__item"));
listObjs.forEach((item) => {
    item.addEventListener('click', openDropdown);
})
listItems.forEach((item) => {
    item.addEventListener('click', choiceDropdownItem);
})

function openDropdown(event) {
    listObjs.forEach((item) => {
        if (item === this) {
            item.closest('.dropdown').querySelector('.dropdown__list').classList.toggle('dropdown__list_active');
        } else {
            item.closest('.dropdown').querySelector('.dropdown__list').classList.toggle('dropdown__list_active', false);
        }
    })
}

function choiceDropdownItem(event) {
    event.preventDefault();
    this.closest('.dropdown').querySelector('.dropdown__value').textContent = event.target.textContent;
    this.closest('.dropdown').querySelector('.dropdown__list').classList.toggle('dropdown__list_active');
}

