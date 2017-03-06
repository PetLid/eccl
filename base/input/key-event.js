/**
 * Trace the keys pressed
 */
export default function() {
    "use strict";

    var pressed = {};

    // On key release
    window.addEventListener('keyup', event => {
        delete pressed[event.keyCode];
    });

    // On key press
    window.addEventListener('keydown', event => {
        pressed[event.keyCode] = true;
    });

    // Return what to export
    return {

        isDown: function(key1, key2) {
            return pressed[key1] || pressed[key2];
        },

        pressedKeys: function() {
            return pressed;
        }
    };
}
