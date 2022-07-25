import Constants, { GLOBALS } from "../../Constants.js";
import Structure from "./Structure.js";

export default class DefaultStructure extends Structure {
    constructor(){
        super({
            baseCost: 1, 
            baseHP: 20
        });

        this.name = "Default Structure";
        this.asset = GLOBALS.ASSETS.DEFAULT_STRUCTURE
    }
}