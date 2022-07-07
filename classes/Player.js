export default class Player {
    constructor(name, deck){
        this.name = name;

        this.deck = deck;
        this.discard = [];
        this.hand = [];

        this.coins = 0;

        this.structureSlot1 = null;
        this.structureSlot2 = null;
        this.utilitySlot = null;
        this.unitySlot1 = null;
        this.unitySlot2 = null;
        this.unitySlot3 = null;
    }

    DrawCards(quantity = 1) {
        if(this.deck.cards.length >= quantity){
            var name = this.name;
            var drawedCards = this.deck.Draw(quantity);
            this.hand = this.hand.concat(drawedCards);

            drawedCards.forEach(function(card){
                console.log(`Drawed ${card.name} | ${name}`);
            })
        }
    }

    PlaceCard(card, slot){
        if(this[slot] == null){
            this[slot] = card;

            var cardIndex = this.hand.indexOf(card);            
            if(cardIndex > -1){
                this.hand.splice(cardIndex, 1);
            }
        }
    }
}