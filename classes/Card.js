export default class Card {
    constructor(name, type, asset, hp = 0, atk = 0, cost = 0){
        this.name = name;
        this.type = type;
        this.hp = hp;
        this.atk = atk;
        this.cost = cost;
        this.asset = asset;
    }
}