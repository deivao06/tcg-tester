var CONSTANTS = {
    CARD: {
        SIZES: {
            WIDTH: 80,
            HEIGHT: 120,
        },
        TYPES: {
            UNITY: "unity",
            STRUCTURE: "structure",
            UTILITY: "utility"
        }
    }
}

var GLOBALS = {
    ASSETS: {
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