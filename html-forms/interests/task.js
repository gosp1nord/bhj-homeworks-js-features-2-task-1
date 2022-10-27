


const elementsLi = Array.from(document.querySelectorAll('.interest__check'));
elementsLi.forEach((elem) => {
    elem.addEventListener('click', () =>{
        if (!elem.closest('.interests_active')) {
            const elemParent = elem.closest('.interest');
            const elementUl = elemParent.querySelector('.interests_active');
            const elementsChilds = Array.from(elementUl.querySelectorAll('.interest__check'));
            elementsChilds.forEach((item) => {
                item.checked = elem.checked
            })
        }
    })
})

