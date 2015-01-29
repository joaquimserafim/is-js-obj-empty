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
