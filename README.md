# HTTP2 got

[![Greenkeeper badge](https://badges.greenkeeper.io/hisco/http2-got.svg)](https://greenkeeper.io/)

> Simplified HTTP requests

[![NPM Version][npm-image]][npm-url]
[![Build Status][travis-image]][travis-url]
[![Known Vulnerabilities][snyk-image]][snyk-url]

Http2 got is a human-friendly and powerful HTTP1.1 / HTTP2 request library.

To be http2 compatible it uses [http2-client](https://www.npmjs.com/package/http2-client).
To make requests it uses [got](https://www.npmjs.com/package/got) - expect the API to be identical just with http2 support.

#Motivation
Got is a wonderfull module, it was just missing http2 support that was added with this module.

When using the module you are actually using the `got` module not even a fork...

You can easilly achive it in the same manner without this module:
```js
const {request} = require('http2-client');
const got = require('got');

const gotWithHttp2 = got.extend({
	request
});
```
That's it! of course we have additional integration tests to validate this integration... 

# Full API Documentation
The API is identical to this of `Got`.
To see the full API documentation:
[Got Documentation](https://www.npmjs.com/package/got)

## License

  [MIT](LICENSE)

[npm-image]: https://img.shields.io/npm/v/http2-got.svg
[npm-url]: https://npmjs.org/package/http2-got
[travis-image]: https://img.shields.io/travis/hisco/http2-got/master.svg?style=flat-square
[travis-url]: https://travis-ci.org/hisco/http2-got
[snyk-image]: https://snyk.io/test/github/hisco/http2-got/badge.svg?targetFile=package.json
[snyk-url]: https://snyk.io/test/github/hisco/http2-got/badge.svg?targetFile=package.json