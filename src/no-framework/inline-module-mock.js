/**
 * Task: refactor the code to mock the entire module.
 *
 * Execute: Use `npx jest --watch src/no-framework/inline-module-mock.js` to watch the test
 */

function fn(impl = () => {}) {
  const mockFn = (...args) => {
    mockFn.mock.calls.push(args)
    return impl(...args)
  }
  mockFn.mock = {calls: []}
  return mockFn
}

const utilsPath = require.resolve('../utils')
require.cache[utilsPath] = {
  id: utilsPath,
  filename: utilsPath,
  loaded: true,
  exports: {
    getWinner: fn((p1, p2) => p1)
  }
}

const assert = require('assert')
const thumbWar = require('../thumb-war')
const utils = require('../utils')

const winner = thumbWar('Kent C. Dodds', 'Ken Wheeler')
assert.strictEqual(winner, 'Kent C. Dodds')
assert.deepStrictEqual(utils.getWinner.mock.calls, [
  ['Kent C. Dodds', 'Ken Wheeler'],
  ['Kent C. Dodds', 'Ken Wheeler']
])

// cleanup
delete require.cache[utilsPath]


// cleanup

/**
 * Hints:
 * - https://nodejs.org/api/modules.html#modules_caching
 *
 * Checkout master branch to see the answer.
 */

/**
 * Conclusions:
 * 
 * We can mock entire modules in order to work with ESModules and in order to use complete mock module implementations where needed.
 */
