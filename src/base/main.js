// Imports
import GameWrapper from "./gameWrapper.js";
const CONFIG = require("../config.js");
var Game = CONFIG.Game;

console.log("Ey, " + CONFIG.gameURL);

// Function for determining if document is ready
function onReady(fn) {
    if (document.readyState != 'loading'){
        fn();
    } else {
        document.addEventListener('DOMContentLoaded', fn);
    }
}


function startGame()
{
    var gameWrapper = GameWrapper();
    var game = new Game();

    gameWrapper.init('main-canvas', game);
    gameWrapper.gameLoop();

    console.log('Ready to play.');
}


// Start
onReady(function() {
    startGame();
});
