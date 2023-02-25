class Deck{
    constructor(){
        const suits = ['Diamonds', 'Hearts', 'Clubs', 'Spades']
        const faces = ['Ace', '1', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'Jack', 'Queen', 'King']
        const cards = []
            suits.forEach(suits => {
                faces.forEach(faces => {
                    cards.push(this.createDeck(suits, faces))
                })
            });
            this.cards = cards
    }

    createDeck(suits, faces) {
        return `${faces} of ${suits}`
    }
}

hand = new Deck()
console.log(hand)

console.log(hand.createDeck('Hearts', '5'))




























