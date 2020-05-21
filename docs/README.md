# [Pseudo-Random Number Generator](../README.md)

## Index

### Classes

* [PRNG](classes/prng.md)
* [PRNGContainer](classes/prngcontainer.md)

### Type aliases

* [TSeedCallback](README.md#tseedcallback)

### Functions

* [defaultSeedCallback](README.md#const-defaultseedcallback)

## Type aliases

###  TSeedCallback

Ƭ **TSeedCallback**: *function*

*Defined in [index.ts:66](https://github.com/sibvrv/PRNG/blob/fc1cf27/src/index.ts#L66)*

#### Type declaration:

▸ (`name`: string, `rootSeed`: number): *number*

**Parameters:**

Name | Type |
------ | ------ |
`name` | string |
`rootSeed` | number |

## Functions

### `Const` defaultSeedCallback

▸ **defaultSeedCallback**(`name`: string, `seed`: number): *number*

*Defined in [index.ts:75](https://github.com/sibvrv/PRNG/blob/fc1cf27/src/index.ts#L75)*

Seed Initialization
Default Callback

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`name` | string | Instance name |
`seed` | number | Parent seed |

**Returns:** *number*
