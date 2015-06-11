var _ = require('lodash');

/**
 * A javascript isNumber that behaves the way you would expect.
 */

module.exports = function isFiniteNumber(number) {
  return _.isNumber(number) && _.isFinite(number);
}

