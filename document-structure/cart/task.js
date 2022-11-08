


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
    const productsBasket = Array.from(blockBasket.querySelectorAll('.cart__product'));

    const parentElem = this.closest('.product');
    const idElem = parentElem.dataset.id;
    const imgElem = parentElem.querySelector('.product__image').getAttribute('src');
    const quantityElem = parentElem.querySelector('.product__quantity-value').innerText;

    let elemInBasket = productsBasket.find(item => item.dataset.id === idElem);
    if (elemInBasket) {
        let elemValue = Number(elemInBasket.querySelector('.cart__product-count').innerText);
        elemInBasket.querySelector('.cart__product-count').innerText = elemValue + Number(quantityElem);
    } else {
        blockBasket.insertAdjacentHTML('beforeend', `
            <div class="cart__product" data-id="${idElem}">
                <img class="cart__product-image" src="${imgElem}">
                <div class="cart__product-count">${quantityElem}</div>
            </div>
        `)
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

