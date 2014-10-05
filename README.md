# sheetify-calc
[![NPM version][npm-image]][npm-url]
[![build status][travis-image]][travis-url]
[![Test coverage][coveralls-image]][coveralls-url]
[![Downloads][downloads-image]][downloads-url]

A [sheetify][sheetify-url] transform to add support for
[W3C-style CSS calc](http://www.w3.org/TR/css3-values/#calc-notation)
syntax. Uses [`rework-calc`][rework-calc] to perform the transformation.
When multiple units are mixed together in the same expression, the `calc()`
statement is left as is, to fallback to the CSS3 calc feature.

__N.B.__ This is not a polyfill. This transform aims to provide a future-proof way
of using a limited subset of the features provided by native CSS custom media
queries.

## Installation
```bash
npm install sheetify-calc
```

## Usage
As a sheetify transform:
```js
var calc = require('sheetify-calc');
var sheetify = require('sheetify');

sheetify('path/to/my/index.css')
  .transform(calc())
  .bundle();
```

## License
[MIT](https://tldrlegal.com/license/mit-license)

[npm-image]: https://img.shields.io/npm/v/sheetify-calc.svg?style=flat-square
[npm-url]: https://npmjs.org/package/sheetify-calc
[travis-image]: https://img.shields.io/travis/yoshuawuyts/sheetify-calc.svg?style=flat-square
[travis-url]: https://travis-ci.org/yoshuawuyts/sheetify-calc
[coveralls-image]: https://img.shields.io/coveralls/yoshuawuyts/sheetify-calc.svg?style=flat-square
[coveralls-url]: https://coveralls.io/r/yoshuawuyts/sheetify-calc?branch=master
[downloads-image]: http://img.shields.io/npm/dm/sheetify-calc.svg?style=flat-square
[downloads-url]: https://npmjs.org/package/sheetify-calc

[sheetify-url]: https://github.com/requireio/sheetify
[rework-calc]: https://github.com/reworkcss/rework-calc
