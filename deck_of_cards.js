class Deck {
    constructor() {
        const suits = ['Hearts', 'Diamonds', 'Clubs', 'Spades']
        const face = ['Ace', '2', '3', '4', '5' ,'6', '7', '8', '9', '10', 'Jack', 'Queen', 'King']
        const deckOfCards = []
            suits.forEach(suits => {
                face.forEach(face => {
                    deckOfCards.push(this.createDeck(suits, face))
                })
            })
            this.deckOfCards = deckOfCards
    }
    createDeck(suits, face){
        return `${face} of ${suits}`
    }
}

dealer = new Deck()
console.log(dealer)

//built in 3:02