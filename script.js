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
                               <button class="btn-plus-minus">+1</button>
                               <span>0</span>
                               <button class="btn-plus-minus">-1</button>
                               `
    
    containerPlayerList.appendChild(cardConteiner)

    formInputPlayerName.value = ''
    formInputPlayerName.focus()
})
