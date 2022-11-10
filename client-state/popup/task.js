

const elements = document.cookie.split('; ');
let popup = elements.find(e => e.startsWith('popup=1'))
if (!popup) {
    const popupBlock = document.getElementById('subscribe-modal');
    popupBlock.classList.add('modal_active');
    const btnClose = document.querySelector('.modal__close');
    btnClose.addEventListener('click', closePopup);
}


function closePopup() {
    const popupBlock = document.getElementById('subscribe-modal');
    popupBlock.classList.remove('modal_active');
    document.cookie = 'popup=1'
}


