# :seedling: Pseudo-Random Number Generator written in TypeScript

[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](https://opensource.org/licenses/MIT)

Implementation of the Park Miller (1988) "minimal standard" linear congruential pseudo-random number generator.

[PRNG Documentation](docs/README.md)

Example:

```typescript
import {PRNG} from 'prng';

const rng = new PRNG(280583);
console.log(rng.random());
```
