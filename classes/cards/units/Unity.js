import Card from "../Card.js";

export default class Unity extends Card {
    constructor({baseCost = 0, baseHP = 0, baseATK = 0}){
        super({baseCost: baseCost});

        this.baseHP = baseHP;
        this.baseATK = baseATK;

        this.currentHP = this.baseHP;
        this.currentATK = this.baseATK;

        this.attacksPerTurn = 1;
        this.attackCount = 0;
    }

    TakeDamage(damage){
        this.currentHP -= damage;
    }

    Died(){
        return this.currentHP <= 0;
    }

    CanAttack(){
        return this.attackCount < this.attacksPerTurn;
    }

    ResetAttackCount(){
        this.attackCount = 0;
    }
}