
let cards = []
let sum = 0
let hasBlackJack = false
let isAlive = false
let message = ""
let messageEl = document.getElementById("messageEl")
let sumEl = document.getElementById("sumEl")
let cardsEl = document.getElementById("cardsEl")

function getRandomCard() {
    let randomNumber =  Math.floor(Math.random() * 13);
    if (randomNumber > 10) {
        return 10
    } else if (randomNumber === 1 ) {
        return 11
    } else {
        return randomNumber
    }

}

function startGame() {
    isAlive = true
    let firstCard = getRandomCard()
    let secondCard = getRandomCard()
    cards = [firstCard, secondCard]
    sum = firstCard + secondCard
    renderGame()
}

function renderGame() {
    cardsEl.textContent = "Cards: " 
    for (let i = 0; i < cards.length; i++) {
        cardsEl.textContent += cards[i] + " "
    }

    sumEl.textContent = "Sum: " + sum
    if (sum < 21) {
        message = "New card?"
    } else if (sum === 21 ){
        message = "You have Black Jack"
        hasBlackJack = true
    
    
    } else if (sum > 21 ){
        message = "Youre out of the game!"
        isAlive = false
    
    
    }
    messageEl.textContent = message

}

function newCard() {
    if ( isAlive === true && hasBlackJack === false) {
    let card = getRandomCard()
    sum += card
    cards.push(card) 
    renderGame()
    }
}
