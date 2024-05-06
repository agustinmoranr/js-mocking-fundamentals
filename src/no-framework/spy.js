/**
 * Task: implement a `spyOn`.
 *
 * Execute: Use `npx jest --watch src/no-framework/spy.js` to watch the test
 */

const assert = require('assert')
const thumbWar = require('../thumb-war')
const utils = require('../utils')

function fn(implementation = () => {}) {
  const mockFn = (...args) => {
    mockFn.mock.calls.push(args)
    return implementation(...args)
  }
  mockFn.mock = {calls: []}
  mockFn.mockImplementation = (newImplementation) => implementation = newImplementation
  return mockFn
}

function spyOn(object, methodName) {
  const originalMethod = object[methodName]
  object[methodName] = fn() //Mock del método original lo cual extiende su funcionalidad gracias a fn()
  object[methodName].mockRestore = () => object[methodName] = originalMethod
}

spyOn(utils, 'getWinner')
utils.getWinner.mockImplementation((p1, p2) => p1)
const winner = thumbWar('Kent C. Dodds', 'Ken Wheeler')
assert.strictEqual(winner, 'Kent C. Dodds')
assert.deepStrictEqual(utils.getWinner.mock.calls, [
  ['Kent C. Dodds', 'Ken Wheeler'],
  ['Kent C. Dodds', 'Ken Wheeler'],
])

// cleanup
utils.getWinner.mockRestore()

/**
 * Checkout master branch to see the answer.
 */

/**
 * Conclusions:
 * 
 * the idea behind the spyOn method is to allow the developer to mock a track an implementation and extend the functionalities to test it. And also expose methods to easily restore the original implementation. 
 */
