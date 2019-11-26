/**
 * Implementation of the Park Miller (1988) "minimal standard"
 * linear congruential pseudo-random number generator.
 */
export declare class PRNG {
    seed: number;
    /**
     * Number generator constructor
     * @param seed
     */
    constructor(seed?: number);
    /**
     * Seed From String
     * @param data
     */
    seedFromString(data: string): void;
    /**
     * Random Number [0, 1)
     * @return {number}
     */
    random(): number;
    /**
     * Random Range
     * @param min
     * @param max
     * @return {number}
     */
    randomRange(min: number, max: number): number;
    /**
     * Random Unsigned Int
     */
    randomLong(): number;
}
