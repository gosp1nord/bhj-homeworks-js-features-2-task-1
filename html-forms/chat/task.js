

const btnOpen = document.querySelector('.chat-widget__side');
btnOpen.addEventListener('click', () => {
    const divChat = document.querySelector('.chat-widget');
    divChat.classList.add('chat-widget_active');
});


const inpForm = document.getElementById('form__input');
inpForm.addEventListener('submit', (event) => {
    event.preventDefault();
    const inpInput = document.getElementById('chat-widget__input');
    if (inpInput.value) {
        const messages = document.querySelector( '.chat-widget__messages' );
        let date = new Date();
        messages.innerHTML += `
            <div class="message message_client">
                <div class="message__time">` + date.getHours() + `:` + date.getMinutes() + `</div>
                <div class="message__text">` + inpInput.value + `</div>
            </div>
        `;

        const container = document.querySelector( '.chat-widget__messages-container' );
        container.scrollTop = container.scrollHeight;
        inpInput.value = ''

        answerRobot()
    }
})


function answerRobot() {
    let arrAnswers = [
        'Привет', 'Прекрасная погода', 'Мы скоро Вам ответим', 'Наш ответ уже в пути', 'Мы уже решаем Ваш вопрос'
    ]
    const messages = document.querySelector( '.chat-widget__messages' );
    let date = new Date();
    let rand = Math.floor(Math.random() * arrAnswers.length);
    let answer = arrAnswers[rand]

    messages.innerHTML += `
      <div class="message">
        <div class="message__time">` + date.getHours() + `:` + date.getMinutes() + `</div>
        <div class="message__text">` + answer + `</div>
      </div>
    `;

    const container = document.querySelector( '.chat-widget__messages-container' );
    container.scrollTop = container.scrollHeight;
}



