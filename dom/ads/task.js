


 function rotating() {
    return new Promise(resolve => {
        let elemAds = document.querySelector('.rotator__case_active');
        let speed = Number(elemAds.nextElementSibling.getAttribute('data-speed'));
        let nextElem;
        if (elemAds.nextElementSibling === document.querySelector('.rotator').lastElementChild) {
            nextElem = document.querySelector('.rotator').firstElementChild;
        } else {
            nextElem = elemAds.nextElementSibling;
        }
        let color = nextElem.getAttribute('data-color');
        setTimeout(function () {
            elemAds.classList.toggle('rotator__case_active');
            nextElem.classList.toggle('rotator__case_active');
            nextElem.style.color = color;
            resolve(true)
        }, speed)
    })
}


async function testAds() {
    while (true) {
        await rotating();
    }
}
testAds();

