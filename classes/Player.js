import CONSTANTS from "./Constants.js";

export default class Player {
    constructor(name, deck){
        this.name = name;

        this.deck = deck;
        this.discard = [];
        this.hand = [];
        this.selectedCard = null;

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
            if(this.coins >= card.currentCost){
                this[slot] = card;
    
                var cardIndex = this.hand.indexOf(card);            
                if(cardIndex > -1){
                    this.hand.splice(cardIndex, 1);
                }

                this.coins -= card.currentCost;
                if(this.coins < 0){
                    this.coins = 0;
                }
            }else{
                alert("Você não tem moedas suficientes!");
            }
        }
    }

    IsMyCard = function(card){
        return this.hand.includes(card);
    }    

    DealDamageToCard(slot, damage){
        this[slot].TakeDamage(damage);

        if(this[slot].Died()){
            this.discard.push(this[slot]);
            this[slot] = null;
        }
    }

    IsSlotNotEmpty(slot){
        return this[slot] != null;
    }

    GetSlotCard(slot){
        return this[slot];
    }

    ResetSlotsAttackCount(){
        var slots = Object.values(CONSTANTS.GAME.SLOTS);
        var player = this;
        slots.forEach(function(slot){
            if(player[slot] != null){
                player[slot].ResetAttackCount();
            }
        })
    }

    SelectCard(card){
        if(this.IsMyCard(card)){
            this.selectedCard = card;
        }
    }
}