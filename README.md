# Babeljs Issue: Cannot export an async function
You can clone this repo to reproduce Babel#foo

## The Goal
Write a module whose only export is an async function.

## Reproduction Criteria
- Transpiling `src/factory-exported-async.js` produces a file in which
  the declarations and assignments for `regeneratorRuntime` and
  `_asyncToGenerator` are placed at the top of the file, enabling the
  exported function to run correctly.

- Transpiling `src/top-level-async.js` produces a file in which
  the declarations and assignments for `regeneratorRuntime` and
  `_asyncToGenerator` are placed at the bottom of the file, after the
  declaration for the exported function, resulting in a `TypeError`
  when requiring the module.
  
## Running It
`npm test` will build both versions and attempt to require both, with
a report on their respective successes. Or you could just verify the
files in `dist/` are as described above.

## Environment
This was done with:

- Node v4.4.6, v7.2.0
- NPM v3.10.9
- babel-cli@6.24.1
- babel-plugin-transform-regenerator@6.24.1
- babel-polyfill@6.23.0
- babel-preset-env@1.6.0

