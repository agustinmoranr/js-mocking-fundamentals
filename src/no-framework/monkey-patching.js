/**
 * Mocking allows our tests to be deterministic and
 * ensure that we will get the expected result every time.
 *
 * The most naïve approach to mocking in JavaScript is to
 * override an object’s properties in the test. This is
 * pretty simple and straightforward, but also fairly
 * limited.
 *
 * In this lesson, we’ll monkey patch our `getWinner`
 * function to always return the same winner every time the
 * function is called. After the test is run, we’ll clean up
 * the mock and assign the original function implementation
 * back to `getWinner`.
 *
 * Task: patch a `getWinner` function to always return the
 * same winner every time the function is called.
 *
 * Execute: Use `npx jest --watch ./src/no-framework/monkey-patching.js` to watch the test
 */

const assert = require('assert')
const thumbWar = require('../thumb-war')
const utils = require('../utils')

// Your code:
const getWinnerRef = utils.getWinner
utils.getWinner = (player1, player2) => player1;
// monkey patch

const winner = thumbWar('Kent C. Dodds', 'Ken Wheeler')
assert.strictEqual(winner, 'Kent C. Dodds')

// Your code:
utils.getWinner = getWinnerRef;
const winner2 = thumbWar('a', 'b');
console.log(winner2)
// cleanup

/**
 * Checkout master branch to see the answer.
 */


/**
 * My conclusions:
 * Monkey patching is the act of overriding the implementation of a function in order to test a process in a more deterministic way.
 * It is important to cleanup the functions monkey patched in order to do not affect other test or have unexpected results. 
 */