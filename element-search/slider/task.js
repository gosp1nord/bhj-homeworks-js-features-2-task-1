

const listObjs = Array.from(document.querySelectorAll(".slider__item"));
const dots = Array.from(document.querySelectorAll(".slider__dot"));

let numImg = 0;
document.querySelector(".slider__arrow_next").onclick = () => runSlide(numImg + 1);
document.querySelector(".slider__arrow_prev").onclick = () => runSlide(numImg - 1);

dots.forEach((item) => {
    item.onclick = () => {
        runSlide(dots.indexOf(item));
    }
})


function runSlide(index) {
    let positionImg = listObjs.findIndex((elem) => {
        return elem.className.includes('slider__item_active');
    });

    listObjs[positionImg].classList.toggle('slider__item_active');
    dots[positionImg].classList.toggle('slider__dot_active');
    numImg = index;
    if (numImg === listObjs.length) {
        numImg = 0;
    } else if (numImg < 0) {
        numImg = listObjs.length - 1;
    }

    listObjs[numImg].classList.toggle('slider__item_active');
    dots[numImg].classList.toggle('slider__dot_active');
}




/*
document.querySelector(".slider__arrow_next").onclick = () => runSlide('1');
document.querySelector(".slider__arrow_prev").onclick = () => runSlide('2');
let num_img = 0;

*/





/*

dots.forEach((item) => {
    item.onclick = () => {
        item_on = dots.indexOf(item);
        console.log(item_on);
        runDots(item_on);
    }
})

function runDots(num) {
    listObjs[num_img].classList.toggle('slider__item_active');
    dots[num_img].classList.toggle('slider__dot_active');
    num_img = num;
    listObjs[num_img].classList.toggle('slider__item_active');
    dots[num_img].classList.toggle('slider__dot_active');
}

function runSlide(num) {
    listObjs[num_img].classList.toggle('slider__item_active');
    dots[num_img].classList.toggle('slider__dot_active');
    if (num === "1") {
        num_img += 1;
        if (num_img === listObjs.length) num_img = 0;
    } else {
        num_img -= 1;
        if (num_img < 0) num_img = listObjs.length - 1;
    }
    listObjs[num_img].classList.toggle('slider__item_active');
    dots[num_img].classList.toggle('slider__dot_active');
}


 */