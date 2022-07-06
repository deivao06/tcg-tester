export default class Player {
    constructor(name, deck){
        this.name = name;

        this.deck = deck;
        this.discard = [];
        this.hand = [];

        this.coins = 0;
    }

    DrawCards(quantity = 1) {
        if(this.deck.cards.length >= quantity){
            var drawedCards = this.deck.Draw(quantity);
            this.hand = this.hand.concat(drawedCards);
        }
    }
}