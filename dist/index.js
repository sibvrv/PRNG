"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PRNGContainer = exports.defaultSeedCallback = exports.PRNG = void 0;
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
        var _this = this;
        if (seed === void 0) { seed = 1; }
        this.seed = seed;
        /**
         * Seed From String
         * @param data - Any string
         * @return {number}
         */
        this.seedFromString = function (data) {
            return _this.seed = PRNG.seedFromString(data);
        };
        /**
         * Random Number [0, 1)
         * @return {number}
         */
        this.random = function () {
            return (_this.randomLong() / 2147483647);
        };
        /**
         * Random Range [min, max)
         * @param min
         * @param max
         * @return {number}
         */
        this.randomRange = function (min, max) {
            return min + ((max - min) * _this.random());
        };
        /**
         * Random Unsigned Int
         */
        this.randomLong = function () {
            return _this.seed = (_this.seed * 16807) % 2147483647;
        };
    }
    /**
     * Seed From String
     * @param data - any string
     */
    PRNG.seedFromString = function (data) {
        if (!data) {
            return 1;
        }
        var seed = 0;
        for (var i = 0; i < data.length; i++) {
            var char = data.charCodeAt(i);
            seed = ((seed << 5) - seed) + char;
            seed = seed & seed;
        }
        return (seed > 0 ? seed : (-seed + 2147483646)) % 2147483647 || 1;
    };
    return PRNG;
}());
exports.PRNG = PRNG;
/**
 * Seed Initialization
 * Default Callback
 * @param name - Instance name
 * @param seed - Parent seed
 * @returns {number}
 */
var defaultSeedCallback = function (name, seed) { return PRNG.seedFromString("" + name + seed + seed.toString(32)); };
exports.defaultSeedCallback = defaultSeedCallback;
/**
 * PRNG Container
 */
var PRNGContainer = /** @class */ (function () {
    /**
     * PRNGContainer Constructor
     * @param seed - Global Seed
     * @param seedFunc - Seed generator per instance
     */
    function PRNGContainer(seed, seedFunc) {
        if (seed === void 0) { seed = 1; }
        if (seedFunc === void 0) { seedFunc = exports.defaultSeedCallback; }
        this.seed = seed;
        this.seedFunc = seedFunc;
        this.items = {};
    }
    /**
     * Get PRNG instance by name
     * @param name - Instance Name
     */
    PRNGContainer.prototype.getInstance = function (name) {
        return this.items[name] || (this.items[name] = new PRNG(this.seedFunc(name, this.seed)));
    };
    return PRNGContainer;
}());
exports.PRNGContainer = PRNGContainer;
