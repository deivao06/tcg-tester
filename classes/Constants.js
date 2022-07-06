var CONSTANTS = {
    CARD: {
        SIZES: {
            WIDTH: 60,
            HEIGHT: 80,
        },
        TYPES: {
            UNITY: "unity",
            STRUCTURE: "structure",
            UTILITY: "utility"
        }
    },
    GAME: {
        PHASES: {
            START_GAME: "Start Game",
            START: "Start Phase",
            DRAW: "Draw Phase",
            POSITION: "Position Phase",
            ATTACK: "Attack Phase",
            END: "End Phase",
        }
    }
}

var GLOBALS = {
    ASSETS: {
        BACK: makeImageFromFilePath("../assets/back.png"),
        HOOPA: makeImageFromFilePath("../assets/hoopa.png"),
        INTELEON: makeImageFromFilePath("../assets/inteleon.png"),
        MOLTRES: makeImageFromFilePath("../assets/moltres.png"),
        URSHIFU: makeImageFromFilePath("../assets/urshifu.png"),
    }
}

function makeImageFromFilePath(path){
    var newImage = new Image();
    newImage.src = path;
    return newImage;
}

export { CONSTANTS as default, GLOBALS }