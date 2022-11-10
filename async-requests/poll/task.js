

const xhr = new XMLHttpRequest;
xhr.addEventListener('readystatechange', () => {
    if (xhr.readyState === xhr.DONE) {
        const objData = JSON.parse(xhr.responseText);
        document.getElementById('poll__title').innerText = objData.data.title;
        const blockAnswers = document.getElementById('poll__answers');
        objData.data['answers'].forEach((item) => {
            blockAnswers.insertAdjacentHTML('beforeend', `
                <button class="poll__answer" onclick="alertAnswer()">${item}</button>
            `)
        })
    }
})

xhr.open( 'GET', 'https://netology-slow-rest.herokuapp.com/poll.php' );
xhr.send();

function alertAnswer() {
    alert('Спасибо, ваш голос засчитан!')
}




