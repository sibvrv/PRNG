[Documentation](../README.md) › [PRNG](prng.md)

# Class: PRNG

Implementation of the Park Miller (1988) "minimal standard"
linear congruential pseudo-random number generator.

## Hierarchy

* **PRNG**

## Index

### Constructors

* [constructor](prng.md#constructor)

### Properties

* [seed](prng.md#seed)

### Methods

* [random](prng.md#random)
* [randomLong](prng.md#randomlong)
* [randomRange](prng.md#randomrange)
* [seedFromString](prng.md#seedfromstring)
* [seedFromString](prng.md#static-seedfromstring)

## Constructors

###  constructor

\+ **new PRNG**(`seed`: number): *[PRNG](prng.md)*

*Defined in [index.ts:22](https://github.com/sibvrv/PRNG/blob/fc1cf27/src/index.ts#L22)*

Number generator constructor

**Parameters:**

Name | Type | Default | Description |
------ | ------ | ------ | ------ |
`seed` | number | 1 |   |

**Returns:** *[PRNG](prng.md)*

## Properties

###  seed

• **seed**: *number*

*Defined in [index.ts:28](https://github.com/sibvrv/PRNG/blob/fc1cf27/src/index.ts#L28)*

## Methods

###  random

▸ **random**(): *number*

*Defined in [index.ts:44](https://github.com/sibvrv/PRNG/blob/fc1cf27/src/index.ts#L44)*

Random Number [0, 1)

**Returns:** *number*

___

###  randomLong

▸ **randomLong**(): *number*

*Defined in [index.ts:61](https://github.com/sibvrv/PRNG/blob/fc1cf27/src/index.ts#L61)*

Random Unsigned Int

**Returns:** *number*

___

###  randomRange

▸ **randomRange**(`min`: number, `max`: number): *number*

*Defined in [index.ts:54](https://github.com/sibvrv/PRNG/blob/fc1cf27/src/index.ts#L54)*

Random Range [min, max)

**Parameters:**

Name | Type |
------ | ------ |
`min` | number |
`max` | number |

**Returns:** *number*

___

###  seedFromString

▸ **seedFromString**(`data`: string): *number*

*Defined in [index.ts:36](https://github.com/sibvrv/PRNG/blob/fc1cf27/src/index.ts#L36)*

Seed From String

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`data` | string | Any string |

**Returns:** *number*

___

### `Static` seedFromString

▸ **seedFromString**(`data`: string): *number*

*Defined in [index.ts:10](https://github.com/sibvrv/PRNG/blob/fc1cf27/src/index.ts#L10)*

Seed From String

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`data` | string | any string  |

**Returns:** *number*
