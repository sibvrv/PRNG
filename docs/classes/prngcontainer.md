[Documentation](../README.md) › [PRNGContainer](prngcontainer.md)

# Class: PRNGContainer

PRNG Container

## Hierarchy

* **PRNGContainer**

## Index

### Constructors

* [constructor](prngcontainer.md#constructor)

### Properties

* [items](prngcontainer.md#protected-items)
* [seed](prngcontainer.md#seed)
* [seedFunc](prngcontainer.md#seedfunc)

### Methods

* [getInstance](prngcontainer.md#getinstance)

## Constructors

###  constructor

\+ **new PRNGContainer**(`seed`: number, `seedFunc`: [TSeedCallback](../README.md#tseedcallback)): *[PRNGContainer](prngcontainer.md)*

*Defined in [index.ts:83](https://github.com/sibvrv/PRNG/blob/60b083c/src/index.ts#L83)*

PRNGContainer Constructor

**Parameters:**

Name | Type | Default | Description |
------ | ------ | ------ | ------ |
`seed` | number | 1 | Global Seed |
`seedFunc` | [TSeedCallback](../README.md#tseedcallback) | defaultSeedCallback | Seed generator per instance  |

**Returns:** *[PRNGContainer](prngcontainer.md)*

## Properties

### `Protected` items

• **items**: *object*

*Defined in [index.ts:81](https://github.com/sibvrv/PRNG/blob/60b083c/src/index.ts#L81)*

#### Type declaration:

* \[ **instanceName**: *string*\]: [PRNG](prng.md)

___

###  seed

• **seed**: *number*

*Defined in [index.ts:90](https://github.com/sibvrv/PRNG/blob/60b083c/src/index.ts#L90)*

Global Seed

___

###  seedFunc

• **seedFunc**: *[TSeedCallback](../README.md#tseedcallback)*

*Defined in [index.ts:90](https://github.com/sibvrv/PRNG/blob/60b083c/src/index.ts#L90)*

Seed generator per instance

## Methods

###  getInstance

▸ **getInstance**(`name`: string): *[PRNG](prng.md)‹›*

*Defined in [index.ts:97](https://github.com/sibvrv/PRNG/blob/60b083c/src/index.ts#L97)*

Get PRNG instance by name

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`name` | string | Instance Name  |

**Returns:** *[PRNG](prng.md)‹›*
