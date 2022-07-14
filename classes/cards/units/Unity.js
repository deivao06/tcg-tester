import Card from "../Card.js";

export default class Unity extends Card {
    constructor({baseCost = 0, baseHP = 0, baseATK = 0}){
        super({baseCost: baseCost});

        this.baseHP = baseHP;
        this.baseATK = baseATK;

        this.currentHP = this.baseHP;
        this.currentATK = this.baseATK;
    }
}