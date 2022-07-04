


const modals = document.querySelectorAll('.modal');

for (item of modals) {
    item.querySelector('.modal__close_times').onclick = closeModal;

    if (item.id === 'modal_main') {
        item['className'] +=' modal_active';
        item.querySelector('.btn_danger').onclick = changeModal;
    }
}

function closeModal() {
    this.closest('.modal').className = 'modal';
}

function changeModal() {
    for (item of modals) {
        if (item.id === 'modal_main') {
            item['className'] ='modal';
        } else if (item.id === 'modal_success') {
            item['className'] +=' modal_active';
        }
    }
}


