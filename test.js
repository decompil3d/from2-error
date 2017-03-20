const assume = require('assume');
const fromError = require('./index');

describe('from2-error', function () {
  it('is a function', function () {
    assume(fromError).is.a('function');
    assume(fromError.length).equals(2);
  });

  it('returns a Stream', function () {
    const stream = fromError({}, new Error('Test error'));
    assume(stream).includes('on');
    assume(stream).includes('pipe');

    const noOptsStream = fromError(new Error('Test error'));
    assume(noOptsStream).includes('on');
    assume(noOptsStream).includes('pipe');
  });

  it('emits an error immediately', function (done) {
    fromError(new Error('Test error'))
      .on('data', () => {
        // This should never be called
        assume(false).is.true();
      })
      .on('error', err => {
        assume(err).is.instanceof(Error);
        assume(err.message).equals('Test error');
      })
      .on('end', () => {
        // This should never be called
        assume(false).is.true();
      })
      .on('close', () => {
        done();
      });
  });
});

describe('from2-error.obj', function () {
  it('is a function', function () {
    assume(fromError.obj).is.a('function');
    assume(fromError.obj.length).equals(1);
  });

  it('emits an error immediately', function (done) {
    fromError.obj(new Error('Test error'))
      .on('data', () => {
        // This should never be called
        assume(false).is.true();
      })
      .on('error', err => {
        assume(err).is.instanceof(Error);
        assume(err.message).equals('Test error');
      })
      .on('end', () => {
        // This should never be called
        assume(false).is.true();
      })
      .on('close', () => {
        done();
      });
  });
});
