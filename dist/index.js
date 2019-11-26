"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Implementation of the Park Miller (1988) "minimal standard"
 * linear congruential pseudo-random number generator.
 */
var PRNG = /** @class */ (function () {
    /**
     * Number generator constructor
     * @param seed
     */
    function PRNG(seed) {
        if (seed === void 0) { seed = 1; }
        this.seed = seed;
    }
    /**
     * Seed From String
     * @param data
     */
    PRNG.prototype.seedFromString = function (data) {
        if (!data.length) {
            this.seed = 1;
        }
        var seed = 0;
        for (var i = 0; i < data.length; i++) {
            var char = data.charCodeAt(i);
            seed = ((seed << 5) - seed) + char;
            seed = seed & seed;
        }
        this.seed = (seed > 0 ? seed : (-seed + 2147483646)) % 2147483647 || 1;
    };
    /**
     * Random Number [0, 1)
     * @return {number}
     */
    PRNG.prototype.random = function () {
        return (this.randomLong() / 2147483647);
    };
    /**
     * Random Range
     * @param min
     * @param max
     * @return {number}
     */
    PRNG.prototype.randomRange = function (min, max) {
        return min + ((max - min) * this.random());
    };
    /**
     * Random Unsigned Int
     */
    PRNG.prototype.randomLong = function () {
        return this.seed = (this.seed * 16807) % 2147483647;
    };
    return PRNG;
}());
exports.PRNG = PRNG;
