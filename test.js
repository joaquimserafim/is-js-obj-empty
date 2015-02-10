'use strict';

var test  = require('tape');
var empty = require('./');

test('should return false', function(assert) {
  assert.deepEqual(empty({}), true);
  assert.end();
});

test('should return the object', function(assert) {
  assert.deepEqual(empty({a: 1, b: 2}), false);
  assert.end();
});

test('should throw  an error when the given value is not an js object',
function(assert) {
  assert.plan(1);
  assert.throws(function() {
    empty('');
  }, {message: 'Object.keys called on non-object'});
});
