# is-js-obj-empty

checks the given **js object** is empty

<a href="https://nodei.co/npm/is-js-obj-empty/"><img src="https://nodei.co/npm/is-js-obj-empty.png?downloads=true"></a>

[![Build Status](https://img.shields.io/badge/build-passing-brightgreen.svg?style=flat-square)](https://travis-ci.org/joaquimserafim/is-js-obj-empty)![Code Coverage 100%](https://img.shields.io/badge/code%20coverage-100%25-green.svg?style=flat-square)[![ISC License](https://img.shields.io/badge/license-ISC-blue.svg?style=flat-square)](https://github.com/joaquimserafim/is-js-obj-empty/blob/master/LICENSE)

## API
`var isEmpty = require('is-js-obj-empty')`

**isEmpty(*JS Object*)**

> Returns a boolean

## Usage

```js
var isEmpty = require('is-js-obj-empty');

var obj1 = {text: 'Hello World!'};
var obj2 = {};

var empty1 = isEmpty(obj1);// should return false
var empty1 = isEmpty(obj2);// should return true
```


## Development

##### this projet has been set up with a precommit that forces you to follow a code style, no jshint issues and 100% of code coverage before commit


to run test
``` js
npm test
```

to run jshint
``` js
npm run jshint
```

to run code style
``` js
npm run code-style
```

to run check code coverage
``` js
npm run check-coverage
```

to open the code coverage report
``` js
npm run open-coverage
```
