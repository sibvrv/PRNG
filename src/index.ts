/**
 * Implementation of the Park Miller (1988) "minimal standard"
 * linear congruential pseudo-random number generator.
 */
export class PRNG {

  /**
   * Number generator constructor
   * @param seed
   */
  constructor(public seed = 1) {
  }

  /**
   * Seed From String
   * @param data
   */
  seedFromString(data: string) {
    if (!data.length) {
      this.seed = 1;
    }

    let seed = 0;
    for (let i = 0; i < data.length; i++) {
      const char = data.charCodeAt(i);
      seed = ((seed << 5) - seed) + char;
      seed = seed & seed;
    }
    this.seed = (seed > 0 ? seed : (-seed + 2147483646)) % 2147483647 || 1;
  }

  /**
   * Random Number [0, 1)
   * @return {number}
   */
  random() {
    return (this.randomLong() / 2147483647);
  }

  /**
   * Random Range
   * @param min
   * @param max
   * @return {number}
   */
  randomRange(min: number, max: number) {
    return min + ((max - min) * this.random());
  }

  /**
   * Random Unsigned Int
   */
  randomLong() {
    return this.seed = (this.seed * 16807) % 2147483647;
  }
}
