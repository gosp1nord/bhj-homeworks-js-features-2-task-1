


const listObjs = document.querySelectorAll('.menu_sub');
listObjs.forEach((item) => {
    item.closest('.menu__item').querySelector('.menu__link').onclick = () => {
        roll(item);
        return false;
    }

})

function roll(clicked) {
    listObjs.forEach((item) => {
        if (clicked === item) {
            item.classList.toggle('menu_active')
        } else {
            item.classList.toggle('menu_active', false)
        }
    })
}


