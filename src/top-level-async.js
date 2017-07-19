'use strict';

// When this file is transpiled, we expect to see that the `var demo`
// assignment happens BEFORE `_asyncToGenerator` function declaration
// and the `regeneratorRuntime` declaration.

const regeneratorRuntime = require('regenerator-runtime');

async function demo () {
  // pass
}

module.exports = demo;

