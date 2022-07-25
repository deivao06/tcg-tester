import CONSTANTS from '../classes/Constants.js';
import {
    Unity,
    Utility,
    Structure,
    DefaultUnity
} from '../classes/cards/Imports.js';

export default class Game {
    constructor(){
        this.player1 = null;
        this.player2 = null;
        this.activePlayer = null;

        this.round = 0;
        this.phase = null;
    }

    Start = function(){
        console.log("%cGame Started!", "color:green; font-size: 16px; font-weight: bold");
        this.phase = CONSTANTS.GAME.PHASES.START_GAME;

        console.log("%cPlacing structures of each player!", "color: red;");
        this.player1.PlaceStructures();
        this.player2.PlaceStructures();
        
        console.log("%cShuffling both decks!", "color: red;");
        this.player1.deck.Shuffle();
        this.player2.deck.Shuffle();

        console.log("%cDrawing 5 cards for each player!", "color: red;");
        this.player1.DrawCards(5);
        this.player2.DrawCards(5);

        this.activePlayer = this.player1;
        this.activePlayer.turn++;

        console.log(`%c${this.activePlayer.name} Turn!`, "color:green; font-size: 16px; font-weight: bold");

        this.StartPhase();
    }

    StartPhase = function(){
        console.log(`%c${CONSTANTS.GAME.PHASES.START}! | ${this.activePlayer.name}`, "color:green; font-size: 16px; font-weight: bold");
        this.phase = CONSTANTS.GAME.PHASES.START;

        if(this.activePlayer == this.player1){
            this.round ++;
        }

        console.log(`%cGiving ${this.round} coin! | ${this.activePlayer.name}`, "color: red;");
        this.activePlayer.coins += this.round <= 5 ? this.round : 5;
    }

    DrawPhase = function(){
        console.log(`%c${CONSTANTS.GAME.PHASES.DRAW}! | ${this.activePlayer.name}`, "color:green; font-size: 16px; font-weight: bold");
        this.phase = CONSTANTS.GAME.PHASES.DRAW;
        

        this.activePlayer.DrawCards();
    }

    PositionPhase = function(){
        console.log(`%c${CONSTANTS.GAME.PHASES.POSITION}! | ${this.activePlayer.name}`, "color:green; font-size: 16px; font-weight: bold");
        this.phase = CONSTANTS.GAME.PHASES.POSITION;
    }

    AttackPhase = function(){
        console.log(`%c${CONSTANTS.GAME.PHASES.ATTACK}! | ${this.activePlayer.name}`, "color:green; font-size: 16px; font-weight: bold");
        this.phase = CONSTANTS.GAME.PHASES.ATTACK;
    }

    EndPhase = function(){
        console.log(`%c${CONSTANTS.GAME.PHASES.END}! | ${this.activePlayer.name}`, "color:green; font-size: 16px; font-weight: bold");
        this.phase = CONSTANTS.GAME.PHASES.END;

        this.ChangeTurn();
    }

    ChangeTurn = function(){
        this.activePlayer.ResetSlotsAttackCount();

        if(this.activePlayer == this.player1){
            this.activePlayer = this.player2
        }else{
            this.activePlayer = this.player1
        }

        this.activePlayer.turn++;
        
        console.log(`%c${this.activePlayer.name} Turn!`, "color:green; font-size: 16px; font-weight: bold");

        this.StartPhase();
    }

    isPositionPhase = function(){
        return this.phase == CONSTANTS.GAME.PHASES.POSITION;
    }

    isAttackPhase = function(){
        return this.phase == CONSTANTS.GAME.PHASES.ATTACK;
    }

    PrepareAttack = function(slot){
        if(this.activePlayer.selectedCard != null){
            if(this.activePlayer == this.player1){
                if(this.activePlayer.selectedCard.CanAttack()){
                    this.player2.DealDamageToCard(slot, this.activePlayer.selectedCard.currentATK);
                    this.activePlayer.selectedCard.attackCount++;

                    if(this.player2[slot] != null){
                        console.log(`${this.activePlayer.selectedCard.name} did ${this.activePlayer.selectedCard.currentATK} damage to ${this.player2[slot].name} | ${this.activePlayer.name}`);
                    }
                }
            }else{
                if(this.activePlayer.selectedCard.CanAttack()){
                    this.player1.DealDamageToCard(slot, this.activePlayer.selectedCard.currentATK);
                    this.activePlayer.selectedCard.attackCount++;

                    if(this.player1[slot] != null){
                        console.log(`${this.activePlayer.selectedCard.name} did ${this.activePlayer.selectedCard.currentATK} damage to ${this.player1[slot].name} | ${this.activePlayer.name}`);
                    }
                }
            }        
        }

        this.activePlayer.selectedCard = null;
    }

    PrepareCardSelection = function(card){
        if(this.isPositionPhase()){
            this.activePlayer.SelectCard(card);
        }
    }

    PrepareCardAction = function(slot, type, player){
        if(this.activePlayer == player){
            if(this.isPositionPhase()){
                if(this.activePlayer.selectedCard instanceof type){
                    this.activePlayer.PlaceCard(slot);
                }
            }else if(this.isAttackPhase()){
                if(this.activePlayer.IsSlotNotEmpty(slot)){
                    var card = this.activePlayer.GetSlotCard(slot);
                    if(card instanceof Unity && card.CanAttack()){
                        this.activePlayer.selectedCard = card;
                    }
                }
            }
        }else{
            if(this.isAttackPhase()){
                if(player.IsSlotNotEmpty(slot)){
                    this.PrepareAttack(slot);
                }
            }
        }
    }
}