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
        },
        SLOTS: {
            STRUCTURE_SLOT_1: 'structureSlot1',
            STRUCTURE_SLOT_2: 'structureSlot2',
            UTILITY_SLOT: 'utilitySlot',
            UNITY_SLOT_1: 'unitySlot1',
            UNITY_SLOT_2: 'unitySlot2',
            UNITY_SLOT_3: 'unitySlot3',
        }
    }
}

var GLOBALS = {
    ASSETS: {
        DEFAULT_UNITY: makeImageFromFilePath("../assets/cards/units/default_unity.png"),
    }
}

function makeImageFromFilePath(path){
    var newImage = new Image();
    newImage.src = path;
    return newImage;
}

export { CONSTANTS as default, GLOBALS }