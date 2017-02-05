'use strict';

class Vector {

    constructor(x, y) {

        this.x = x || 0;
        this.y = y || 0;
    }

    /**
     * Takes data and wraps it in a Vector-like object.
     *
     * @param data, the object or number to transform into a vector.
     */
    static $_transformIntoVector(data) {

        var x = data,
            y = data;

        // In case data is a vector-like object
        if (typeof data.x !== "undefined" && typeof data.y !== "undefined") {
            x = data.x;
            y = data.y;
        }

        return { x: x, y: y };
    }

    /**
     * Add a value to this vector.
     *
     * @param term, Vector object or number to add to this.
     */
    add(term) {

        var vec = Vector.$_transformIntoVector(term);

        this.x += vec.x;
        this.y += vec.y;

        return this;
    }


    /**
     * Subtract a value from this vector.
     *
     * @param term, Vector object or number to subtract from this.
     */
    subtract(term) {

        var vec = Vector.$_transformIntoVector(term);

        this.x -= vec.x;
        this.y -= vec.y;

        return this;
    }

    /**
     * Divide this vector with a value.
     *
     * @param divisor, Vector object or number to divide this with.
     */
    divide(divisor) {

        var vec = Vector.$_transformIntoVector(divisor);

        this.x /= vec.x;
        this.y /= vec.y;

        return this;
    }

    /**
     * Multiply this vector with a value.
     *
     * @param factor, Vector objet or number to multiply this with.
     */
     multiply(factor) {

         var vec = Vector.$_transformIntoVector(factor);

         this.x *= vec.x;
         this.y *= vec.y;

         return this;
     }


    magnitude() {
        return Math.sqrt(Math.pow(this.x, 2) + Math.pow(this.y, 2));
    }


    distance(vector) {
        return Math.sqrt(Math.pow(this.x - vector.x, 2) + Math.pow(this.y - vector.y, 2));
    }


    normalize() {
        var magnitude = this.magnitude();
        this.x /= magnitude;
        this.y /= magnitude;
    }

    static $_add(vec, term) {
        var vec2 = Vector.$_transformIntoVector(term);
        return new Vector(vec.x + vec2.x, vec.y + vec2.y);
    }

    static $_subtract(vec, term) {
        var vec2 = Vector.$_transformIntoVector(term);
        return new Vector(vec.x - vec2.x, vec.y - vec2.y);
    }

    static $_divide(vec, divisor) {
        var vec2 = Vector.$_transformIntoVector(divisor);
        return new Vector(vec.x / vec2.x, vec.y / vec2.y);
    }

    static $_multiply(vec, factor) {
        var vec2 = Vector.$_transformIntoVector(factor);
        return new Vector(vec.x * vec2.x, vec.y * vec2.y);
    }

    static $_magnitude(vec) {
        return Math.sqrt(Math.pow(vec.x, 2) + Math.pow(vec.y, 2));
    }

    static $_distance(vec1, vec2) {
        return Math.sqrt(Math.pow(vec1.x - vec2.x, 2) + Math.pow(vec1.y - vec2.y, 2));
    }
}

module.exports = Vector;
