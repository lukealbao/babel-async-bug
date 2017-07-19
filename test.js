'use strict';

function requireTopLevelExport () {
  require(__dirname + '/dist/top-level-async');
}

function requireFactoryExport () {
  require(__dirname + '/dist/factory-exported-async');
}

function ok (fn) {
  var threw = false;
  try { fn(); } catch (e) { threw = true; }
  return !threw;
}

console.log('[Expect true] Wrapped async function can be required:',
            ok(requireFactoryExport));

console.log('[Expect false] Top-level async function can be required:',
            ok(requireTopLevelExport));
