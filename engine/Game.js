export default class Game {
    constructor(){
        this.player1 = null;
        this.player2 = null;
        this.activePlayer = null
    }

    Start = function(){
        this.player1.deck.Shuffle();
        this.player2.deck.Shuffle();

        this.player1.DrawCards(5);
        this.player2.DrawCards(5);
    }
}