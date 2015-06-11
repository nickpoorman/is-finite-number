# is-finite-number

A javascript isNumber that behaves the way you would expect.

## example

```
var isFiniteNumber = require('is-finite-number');

isFiniteNumber(1); // true
isFiniteNumber(1.0); // true
isFiniteNumber(0); // true

isFiniteNumber(NaN); // false
isFiniteNumber(undefined); // false
isFiniteNumber(null); // false
isFiniteNumber(Infinity); // false
isFiniteNumber(Object(1)); // false
isFiniteNumber(true); // false
isFiniteNumber('0'); // false
```

## why?

This makes is super simple to do:

```
var isFiniteNumber = require('is-finite-number');

isFiniteNumber(parseInt('123')); // true
isFiniteNumber(parseFloat('123.456')); // true

isFiniteNumber(parseInt('abc')); // false
```
