import Card from "../Card.js";

export default class Structure extends Card {
    constructor({baseCost = 0, baseHP = 0}){
        super({baseCost: baseCost});

        this.baseHP = baseHP;
        this.currentHP = this.baseHP;
    }

    TakeDamage(damage){
        this.currentHP -= damage;
    }

    Died(){
        return this.currentHP <= 0;
    }
}