/**
 * Implementation of the Park Miller (1988) "minimal standard"
 * linear congruential pseudo-random number generator.
 */
export class PRNG {
  /**
   * Seed From String
   * @param data - any string
   */
  public static seedFromString(data: string) {
    if (!data) {
      return 1;
    }

    let seed = 0;
    for (let i = 0; i < data.length; i++) {
      const char = data.charCodeAt(i);
      seed = ((seed << 5) - seed) + char;
      seed = seed & seed;
    }
    return (seed > 0 ? seed : (-seed + 2147483646)) % 2147483647 || 1;
  }

  /**
   * Number generator constructor
   * @param seed
   */
  constructor(public seed = 1) {
  }

  /**
   * Seed From String
   * @param data - Any string
   * @return {number}
   */
  public seedFromString = (data: string) => {
    return this.seed = PRNG.seedFromString(data);
  }

  /**
   * Random Number [0, 1)
   * @return {number}
   */
  public random = () => {
    return (this.randomLong() / 2147483647);
  }

  /**
   * Random Range [min, max)
   * @param min
   * @param max
   * @return {number}
   */
  public randomRange = (min: number, max: number) => {
    return min + ((max - min) * this.random());
  }

  /**
   * Random Unsigned Int
   */
  public randomLong = () => {
    return this.seed = (this.seed * 16807) % 2147483647;
  }
}

export type TSeedCallback = (name: string, rootSeed: number) => number;

/**
 * Seed Initialization
 * Default Callback
 * @param name - Instance name
 * @param seed - Parent seed
 * @returns {number}
 */
export const defaultSeedCallback = (name: string, seed: number) => PRNG.seedFromString(`${name}${seed}${seed.toString(32)}`);

/**
 * PRNG Container
 */
export class PRNGContainer {
  protected items: {
    [instanceName: string]: PRNG;
  } = {};

  /**
   * PRNGContainer Constructor
   * @param seed - Global Seed
   * @param seedFunc - Seed generator per instance
   */
  constructor(public seed: number = 1, public seedFunc: TSeedCallback = defaultSeedCallback) {
  }

  /**
   * Get PRNG instance by name
   * @param name - Instance Name
   */
  getInstance(name: string) {
    return this.items[name] || (this.items[name] = new PRNG(this.seedFunc(name, this.seed)));
  }
}
