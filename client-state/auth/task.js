

const storageId = localStorage.getItem('user_id');
if (storageId) {
    activeWelcome(storageId)
} else {
    const btnSend = document.getElementById('signin__btn');
    btnSend.addEventListener('click', sendForm);
}


function sendForm(event) {
    event.preventDefault();
    const form = document.querySelector('form');
    let formData = new FormData(form);
    const xhr = new XMLHttpRequest;
    xhr.addEventListener('readystatechange', () => {
        if (xhr.readyState === xhr.DONE) {
            try {
                const response = JSON.parse(xhr.responseText);
                if (response['success']) {
                    activeWelcome(response['user_id'])
                    localStorage.setItem('user_id', response['user_id']);
                } else {
                    activeWelcome(false);
                    form.reset();
                }
            } catch (e) {
                console.log("ошибка запроса -", e)
            }
        }
    });
    xhr.open( 'POST', 'https://netology-slow-rest.herokuapp.com/auth.php' );
    xhr.send(formData);
}

function activeWelcome(name) {
    if (name) {
        document.getElementById('signin').classList.remove('signin_active');
        document.getElementById('welcome').classList.add('welcome_active');
        document.getElementById('user_id').innerText = name;
    } else {
        alert('Неверный логин/пароль');
    }
}

