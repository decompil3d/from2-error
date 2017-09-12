[![Build Status](https://travis-ci.org/decompil3d/from2-error.svg?branch=master)](https://travis-ci.org/decompil3d/from2-error) [![Coverage Status](https://coveralls.io/repos/github/decompil3d/from2-error/badge.svg?branch=master)](https://coveralls.io/github/decompil3d/from2-error?branch=master)

[![NPM](https://nodei.co/npm/from2-error.png?downloads=true&stars=true)](https://nodei.co/npm/from2-error/)

# from2-error

[![Greenkeeper badge](https://badges.greenkeeper.io/decompil3d/from2-error.svg)](https://greenkeeper.io/)
Create a stream that immediately emits the specified Error. Sugary wrapper around from2.

Useful when you want to create a Stream for unit testing your error handlers.

## Example

```js
const from = require('from-error');
const through = require('through2');

from(new Error('Test error'))
  .on('error', err => {
    // Handle the error here
  })
  .on('data', () => {
    // This will never run
  })
  .on('end', () => {
    // This will never run
  })
  .on('close', () => {
    // This will emit when the stream is done
  });
```

## Testing

```sh
npm test
```

## License
[MIT](LICENSE)
