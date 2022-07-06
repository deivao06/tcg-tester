export default class Deck {
    constructor(name, cards = []){
        this.name = name;
        this.cards = cards;
    }

    Draw(quantity) {
        var drawedCards = [];
        for(var i = 0; i < quantity; i++){
            drawedCards.unshift(this.cards.shift());
        }
        return drawedCards;
    }

    Shuffle(){
        let currentIndex = this.cards.length,  randomIndex;

        // While there remain elements to shuffle.
        while (currentIndex != 0) {

            // Pick a remaining element.
            randomIndex = Math.floor(Math.random() * currentIndex);
            currentIndex--;

            // And swap it with the current element.
            [this.cards[currentIndex], this.cards[randomIndex]] = [
            this.cards[randomIndex], this.cards[currentIndex]];
        }
    }
}