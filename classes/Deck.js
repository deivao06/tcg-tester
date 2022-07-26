import Structure from "./cards/structures/Structure.js";

export default class Deck {
    constructor(name, cards = [], asset){
        this.name = name;
        this.cards = cards;
        this.back = asset;
    }

    Draw({quantity = 0, type = null}) {
        var drawedCards = [];
        var cards = this.cards;

        if(type == null){
            for(var i = 0; i < quantity; i++){
                drawedCards.unshift(this.cards.shift());
            }
        }else{
            var cardsIndex = [];

            cards.forEach(function(card){
                if(card instanceof type){
                    var cardIndex = cards.indexOf(card);            
                    if(cardIndex > -1){
                        cardsIndex.push(cardIndex);
                    }
                }
            });

            if(cardsIndex.length > 0){
                for (var i = cardsIndex.length -1; i >= 0; i--){
                    drawedCards.push(cards.splice(cardsIndex[i],1)[0]);
                }
            }
        }

        debugger;
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

    GetStructures(){
        return this.Draw({type: Structure})
    }
}