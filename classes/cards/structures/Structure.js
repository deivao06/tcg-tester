import Card from "../Card.js";

export default class Structure extends Card {
    constructor(){
        super();

        this.baseHP = 0;
        this.currentHP = this.baseHP;
    }
}