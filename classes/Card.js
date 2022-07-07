export default class Card {
    constructor(name, type, asset, baseHP = 0, baseATK = 0, baseCost = 0){
        this.name = name;
        this.type = type;
        this.baseHP = baseHP;
        this.baseATK = baseATK;
        this.baseCost = baseCost;
        this.asset = asset;

        this.currentHP = this.baseHP;
        this.currentATK = this.baseATK;
        this.currentCost = this.baseCost;
    }
}