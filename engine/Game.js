import CONSTANTS from '../classes/Constants.js';

export default class Game {
    constructor(){
        this.player1 = null;
        this.player2 = null;
        this.activePlayer = null;
        this.selectedCard = null;

        this.round = 0;
        this.phase = null;
    }

    Start = function(){
        console.log("%cGame Started!", "color:green; font-size: 16px; font-weight: bold");
        this.phase = CONSTANTS.GAME.PHASES.START_GAME;

        console.log("%cShuffling both decks!", "color: red;");
        this.player1.deck.Shuffle();
        this.player2.deck.Shuffle();

        console.log("%cDrawing 5 cards for each player!", "color: red;")
        this.player1.DrawCards(5);
        this.player2.DrawCards(5);

        console.log("%cGiving 1 coin for each player!", "color: red;")
        this.player1.coins++;
        this.player2.coins++;

        this.activePlayer = this.player1;
        console.log(`%c${this.activePlayer.name} Turn!`, "color:green; font-size: 16px; font-weight: bold");

        this.StartPhase();
    }

    StartPhase = function(){
        console.log(`%c${CONSTANTS.GAME.PHASES.START}! | ${this.activePlayer.name}`, "color:green; font-size: 16px; font-weight: bold");
        this.phase = CONSTANTS.GAME.PHASES.START;

        if(this.activePlayer == this.player1){
            this.round ++;
        }

        if(this.round != 1){
            console.log(`%cGiving 1 coin! | ${this.activePlayer.name}`, "color: red;");
            this.activePlayer.coins++;
        }
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
        this.activePlayer.resetSlotsAttackCount();

        if(this.activePlayer == this.player1){
            this.activePlayer = this.player2
        }else{
            this.activePlayer = this.player1
        }
        
        console.log(`%c${this.activePlayer.name} Turn!`, "color:green; font-size: 16px; font-weight: bold");

        this.StartPhase();
    }

    isActivePlayerCard = function(card){
        return this.activePlayer.hand.includes(card);
    }    

    isPositionPhase = function(){
        return this.phase == CONSTANTS.GAME.PHASES.POSITION;
    }

    isAttackPhase = function(){
        return this.phase == CONSTANTS.GAME.PHASES.ATTACK;
    }

    PrepareAttack = function(slot){
        if(this.selectedCard != null){
            if(this.activePlayer == this.player1){
                if(this.selectedCard.CanAttack()){
                    this.player2.DealDamageToCard(slot, this.selectedCard.currentATK);
                    this.selectedCard.attackCount++;
                }
            }else{
                if(this.selectedCard.CanAttack()){
                    this.player1.DealDamageToCard(slot, this.selectedCard.currentATK);
                    this.selectedCard.attackCount++;
                }
            }        
        }

        this.selectedCard = null;
    }
}