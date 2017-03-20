const from = require('from2');

/**
 * Create a ReadableStream that immediately emits the specified error
 * 
 * @param {Object} [opts] Optional options to pass to from2
 * @param {Error} error The error to emit
 * @returns {ReadableStream} A ReadableStream that immediately emits the specified error
 * @public
 */
const fromError = module.exports = function (opts, error) {
  if (arguments.length <= 1) {
    error = opts;
    opts = {};
  }
  return from(opts, function (size, next) {
    next(error);
  });
};

/**
 * Create a ReadableStream in object-mode that immediately emits the specified error
 * 
 * @param {Error} error The error to emit
 * @returns {ReadableStream} A ReadableStream that immediately emits the specified error
 * @public
 */
fromError.obj = function (error) {
  return fromError({
    objectMode: true
  }, error);
};
