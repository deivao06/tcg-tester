import Constants, { GLOBALS } from "../../Constants.js";
import Card from "../Card.js";

export default class DefaultUnity extends Card {
    constructor(){
        super({
            name: "Default",
            type: Constants.CARD.TYPES.UNITY,
            asset: GLOBALS.ASSETS.DEFAULT_UNITY,
            baseCost: 1
        })
    }
}