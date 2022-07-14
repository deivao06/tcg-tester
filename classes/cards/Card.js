export default class Card {
    constructor({baseCost = 0}){
        this.name = "";
        this.baseCost = baseCost;
        this.asset = null;

        this.currentCost = this.baseCost;
    }
}