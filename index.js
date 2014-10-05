/**
 * Module dependencies
 */

var calc = require('rework-calc');
var assert = require('assert');

/**
 * Expose `transform()`.
 */

module.exports = transform;

/**
 * Transform `calc()`.
 *
 * @return {Function}
 * @api public
 */

function transform() {
  return function() {
    return function(style, next) {
      next(null, calc(style));
    }
  }
}
