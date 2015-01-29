'use strict';

module.exports = isEmpty;

function isEmpty(obj) {
  return !Object.keys(obj).length;
}
