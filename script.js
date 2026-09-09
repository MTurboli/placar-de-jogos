const playerForm = document.getElementById('form')
const formInputPlayerName = document.getElementById('input-player-name')
const containerPlayerList = document.getElementById('player-list')

playerForm.addEventListener('submit', function(event){
    event.preventDefault()
    
    const playerName = formInputPlayerName.value.trim()

    if (playerName === '') {
        alert('Escreva seu nome')
        return
    }

    const cardConteiner = document.createElement('div')

    cardConteiner.classList.add('player-card')

    cardConteiner.innerHTML = `
                               <h3>${playerName}</h3>
                               <button class="btn-plus">+1</button>
                               <span>0</span>
                               <button class="btn-minus">-1</button>
                               `
    
    containerPlayerList.appendChild(cardConteiner)

    formInputPlayerName.value = ''
    
    formInputPlayerName.focus()
})

containerPlayerList.addEventListener('click', function(event) {
    if (event.target.classList.contains('btn-plus')) {
        const clickBtnPlus = event.target.closest('.player-card')

        const scoreSpan = clickBtnPlus.querySelector('span')

        const currentScore = Number(scoreSpan.textContent)

        scoreSpan.textContent = currentScore + 1
    } else if (event.target.classList.contains('btn-minus')) {
        const clickBtnMinus = event.target.closest('.player-card')

        const scoreSpan = clickBtnMinus.querySelector('span')

        const currentScore = Number(scoreSpan.textContent)

        scoreSpan.textContent = currentScore - 1
    }
})