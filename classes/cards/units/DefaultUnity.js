import Constants, { GLOBALS } from "../../Constants.js";
import Unity from "./Unity.js";

export default class DefaultUnity extends Unity {
    constructor(){
        super({
            baseCost: 1,
            baseHP: 10,
            baseATK: 5
        });

        this.name = "Default Unity";
        this.asset = GLOBALS.ASSETS.DEFAULT_UNITY
    }
}