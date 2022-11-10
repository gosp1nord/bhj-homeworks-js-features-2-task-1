

const xhr = new XMLHttpRequest;
xhr.addEventListener('readystatechange', () => {
    if (xhr.readyState === xhr.DONE) {
        const objData = JSON.parse(xhr.responseText);
        document.getElementById('loader').classList.remove('loader_active');
        const listValutes = document.getElementById('items');
        for (let key in objData["response"]["Valute"]) {
            listValutes.insertAdjacentHTML('afterbegin', `
                <div class="item">
                    <div class="item__code">${objData["response"]["Valute"][key]["CharCode"]}</div>
                    <div class="item__value">${objData["response"]["Valute"][key]["Value"]}</div>
                    <div class="item__currency">руб.</div>
                </div>
            `)
        }
    }
})


xhr.open( 'GET', 'https://netology-slow-rest.herokuapp.com' );
xhr.send();


