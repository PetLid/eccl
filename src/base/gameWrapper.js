'use strict';

const UTILS_FOLDER = "./utils/";
const INPUT_FOLDER = "./input/";


import Keyboard from "./input/key-event.js";
import Mouse from "./input/mouse-event.js";
const Vector = require(UTILS_FOLDER + "vector.js");
const CanvasWrapper = require(UTILS_FOLDER + "canvas-wrapper.js");
const GLOBALS = require("./globals.js");
require(UTILS_FOLDER + "request-anim-frame.js");

export default function() {
    'use strict';

    var canvas,
        ctx,
        game,
        keyboard,
        mouse,
        lastFrameTimeMs = 0,
        canvasWrapper;

    // Time stuff
    var t = 0.0;
    const dt = GLOBALS.timestep * 0.01;
    var currentTime = (new Date).getTime() / 1000;
    var accumulator = 0.0;


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


    function update(dt)
    {
        // Updates input
        var keyboardInput = keyboard.pressedKeys();
        var mouseInput = mouse.getInput();

        var input = { keyboard: keyboardInput, mouse: mouseInput };

        game.update({ input: input, dt: dt });
    };


    function render()
    {
        ctx.clearRect(0, 0, canvas.width, canvas.height);

        game.render(ctx);
    };


    function gameLoop()
    {
        // NEW
        var newTime = (new Date).getTime() / 1000;
        var frameTime = newTime - currentTime;
        currentTime = newTime;

        accumulator += frameTime;

        while ( accumulator >= dt )
        {
            update(dt);
            accumulator -= dt;
            t += dt;
        }

        // NEW
        //console.log("FPS: " + 1/frameTime);

        render();
        requestAnimationFrame(gameLoop);
    };

    return {
        'init': init,
        'gameLoop': gameLoop,
    };

};
