/**
 * Implementation of the Park Miller (1988) "minimal standard"
 * linear congruential pseudo-random number generator.
 */
export declare class PRNG {
    seed: number;
    /**
     * Seed From String
     * @param data - any string
     */
    static seedFromString(data: string): number;
    /**
     * Number generator constructor
     * @param seed
     */
    constructor(seed?: number);
    /**
     * Seed From String
     * @param data - Any string
     * @return {number}
     */
    seedFromString: (data: string) => number;
    /**
     * Random Number [0, 1)
     * @return {number}
     */
    random: () => number;
    /**
     * Random Range [min, max)
     * @param min
     * @param max
     * @return {number}
     */
    randomRange: (min: number, max: number) => number;
    /**
     * Random Unsigned Int
     */
    randomLong: () => number;
}
export declare type TSeedCallback = (name: string, rootSeed: number) => number;
/**
 * Seed Initialization
 * Default Callback
 * @param name - Instance name
 * @param seed - Parent seed
 * @returns {number}
 */
export declare const defaultSeedCallback: (name: string, seed: number) => number;
/**
 * PRNG Container
 */
export declare class PRNGContainer {
    seed: number;
    seedFunc: TSeedCallback;
    protected items: {
        [instanceName: string]: PRNG;
    };
    /**
     * PRNGContainer Constructor
     * @param seed - Global Seed
     * @param seedFunc - Seed generator per instance
     */
    constructor(seed?: number, seedFunc?: TSeedCallback);
    /**
     * Get PRNG instance by name
     * @param name - Instance Name
     */
    getInstance(name: string): PRNG;
}
