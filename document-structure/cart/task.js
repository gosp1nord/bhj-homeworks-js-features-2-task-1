


const btnControl = document.querySelectorAll('.product__quantity-control');
btnControl.forEach((item) => {
    item.addEventListener('click', setQuantity);
})
const btnAdd = document.querySelectorAll('.product__add');
btnAdd.forEach((item) => {
    item.addEventListener('click', addBasket);
})


function addBasket() {
    const blockBasket = document.querySelector('.cart__products');
    const productsBasket = blockBasket.querySelectorAll('.cart__product');

    const parentElem = this.closest('.product');
    const idElem = parentElem.dataset.id;
    const imgElem = parentElem.querySelector('.product__image').getAttribute('src');
    const quantityElem = parentElem.querySelector('.product__quantity-value').innerText;

    let flagAdd = true
    productsBasket.forEach((item) => {
        if (item.dataset.id === idElem) {
            let elemValue = Number(item.querySelector('.cart__product-count').innerText);
            item.querySelector('.cart__product-count').innerText = elemValue + Number(quantityElem);
            flagAdd = false
        }
    })

    if (flagAdd) {
        const block = document.createElement('div');
        block.setAttribute('class', 'cart__product');
        block.setAttribute('data-id', idElem);
        const addImg = document.createElement('img');
        addImg.setAttribute('class', 'cart__product-image');
        addImg.setAttribute('src', imgElem);
        block.appendChild(addImg);
        const addQuantity = document.createElement('div');
        addQuantity.setAttribute('class', 'cart__product-count');
        addQuantity.innerText = quantityElem;
        block.appendChild(addQuantity);
        blockBasket.appendChild(block);
    }
}


function setQuantity() {
    const elemQuantityValue = this.closest('.product__quantity-controls').querySelector('.product__quantity-value');
    if (this.classList.contains('product__quantity-control_inc')) {
        elemQuantityValue.innerText = Number(elemQuantityValue.innerText) + 1;
    } else if (this.classList.contains('product__quantity-control_dec')) {
        let elemValue = Number(elemQuantityValue.innerText) - 1;
        if (elemValue < 1) {
            elemQuantityValue.innerText = 1
        } else {
            elemQuantityValue.innerText = elemValue
        }
    }
}

