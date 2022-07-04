


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


/*

const listObjs = document.querySelectorAll('.menu__item');
const arr = Array.from(listObjs);

let itemOn;
arr.forEach((item) => {
    if (item.querySelector('.menu_sub')) {

        item.querySelector('.menu__link').onclick = () => {
            itemOn = arr.indexOf(item);
            roll();
            return false;
        }
    }
})



function roll() {
    for (item of arr) {
        if (item.querySelector('.menu_sub') && arr.indexOf(item) === itemOn) {
            item.querySelector('.menu_sub').classList.toggle('menu_active')
        } else if (item.querySelector('.menu_sub') && arr.indexOf(item) !== itemOn) {
            item.querySelector('.menu_sub').classList.toggle('menu_active', false)
        }
    }
}


*/

