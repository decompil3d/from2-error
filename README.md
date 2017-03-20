[![Build Status](https://travis-ci.org/decompil3d/from2-error.svg?branch=master)](https://travis-ci.org/decompil3d/from2-error)

# from2-error
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
