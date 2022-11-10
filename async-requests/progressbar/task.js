


const formSend = document.getElementById('send');
formSend.addEventListener('click', sendForm)

function sendForm(event) {
    let count = 0
    event.preventDefault()
    const xhr = new XMLHttpRequest;
    xhr.addEventListener('progress', () => {
        const progress = document.getElementById( 'progress' );
        count += 0.01
        progress.value = count;
    });
    xhr.open( 'GET', 'https://netology-slow-rest.herokuapp.com/upload.php' );
    xhr.send();
}


