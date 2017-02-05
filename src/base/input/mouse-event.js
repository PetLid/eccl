/**
 * Trace the keys pressed
 */

export default function(canvas, offsetX, offsetY, scale) {
    "use strict";

    var pressed = {};
    var pos = {};

    this.test = 0;


    this.offset = { x: 0, y: 0 };
    this.scale = { x: 1, y: 1 };

    var that = this;

    // On mouse button release
    window.addEventListener('mouseup', event => {
        delete pressed[event.button];
    });

    // On mouse button press
    window.addEventListener('mousedown', event => {
        pressed[event.button] = true;
    });

    // On mouse move
    window.addEventListener('mousemove', event => {

        var x = event.clientX,
            y = event.clientY;

        pos.x = (x - this.offset.x * 1) / this.scale.x;
        pos.y = (y - this.offset.y * 1) / this.scale.y;

    });

    // Return what to export
    return {

        isDown: function(button1, button2) {
            return pressed[button1] || pressed[button2];
        },

        getInput: function() {
            return { pos: pos, buttons: pressed };
        },

        offset: this.offset,
        scale: this.scale
    };
}
