'use strict';

// When this file is transpiled, we expect to see that the `var demo`
// assignment happens AFTER `_asyncToGenerator` function declaration
// and the `regeneratorRuntime` declaration.

const regeneratorRuntime = require('regenerator-runtime');

function factory () {
  async function demo () {
    // pass
  }

  return demo;
}

module.exports = (factory)();

