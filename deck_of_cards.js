class Deck {
    constructor() {
        const suit = ['Hearts', 'Diamonds', 'Clubs', 'Spades']
        const face = ['Ace', '1', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'Jack', 'Queen', 'King']
        const deckOfCards = []
            suit.forEach(suit => {
                face.forEach(face => {
                    deckOfCards.push(this.createDeck(suit, face))
                })
            })
            this.deckOfCards = deckOfCards
    }
    createDeck(suit, face){
        return `${face} of ${suit}`
    }
}

dealer = new Deck()
console.log(dealer)



//built in 3:51


