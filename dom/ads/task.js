

const divReveal = document.querySelectorAll('.reveal');

document.addEventListener('scroll', () => {
    divReveal.forEach((item) => {
        let top = item.getBoundingClientRect().top;
        if (top < window.innerHeight) {
            item.classList.add('reveal_active');
        }
    })

})
