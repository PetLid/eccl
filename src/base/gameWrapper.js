'use strict';

const UTILS_FOLDER = "./utils/";
const INPUT_FOLDER = "./input/";


import Keyboard from "./input/key-event.js";
import Mouse from "./input/mouse-event.js";
const Vector = require(UTILS_FOLDER + "vector.js");
const CanvasWrapper = require(UTILS_FOLDER + "canvas-wrapper.js");
const GLOBALS = require("./globals.js");
require(UTILS_FOLDER + "request-anim-frame.js");

export default function(){
    'use strict';

    var canvas,
        ctx,
        game,
        keyboard,
        mouse,
        lastFrameTimeMs = 0,
        canvasWrapper,
        dt = GLOBALS.timestep;


    function init(canvasId, _game)
    {
        canvasWrapper = new CanvasWrapper({ id: canvasId });

        canvas = canvasWrapper.canvas;
        ctx = canvas.getContext("2d");

        // Set up input devices
        keyboard = Keyboard();
        mouse = new Mouse();

        game = _game;

        game.init(canvas);
    };


    function update()
    {
        // Updates input
        var keyboardInput = keyboard.pressedKeys();
        var mouseInput = mouse.getInput();

        var input = { keyboard: keyboardInput, mouse: mouseInput };

        game.update({ input: input });
    };


    function render()
    {
        ctx.clearRect(0, 0, canvas.width, canvas.height);

        game.render(ctx);
    };


    function gameLoop(timestamp)
    {
        // Limit frame rate
        if (timestamp < lastFrameTimeMs + GLOBALS.timestep)
        {
            window.requestAnimFrame(gameLoop);
        }

        lastFrameTimeMs = timestamp;


        update();
        render();
        requestAnimationFrame(gameLoop);
    };

    return {
        'init': init,
        'gameLoop': gameLoop,
    };

};
