/**
 * Often when writing JavaScript tests and mocking
 * dependencies, you’ll want to verify that the function
 * was called correctly. That requires keeping track of
 * how often the function was called and what arguments
 * it was called with. That way we can make assertions
 * on how many times it was called and ensure it was
 * called with the right arguments.
 *
 * Task: use jest assertions to check
 *      1. how often the function is called
 *      2. the function is called with the right arguments
 *
 * Execute: Use `npx jest --watch src/__tests__/mock-fn.js` to watch the test
 */

const thumbWar = require('../thumb-war')
const utils = require('../utils')

test('returns winner', () => {
  const originalGetWinner = utils.getWinner
  utils.getWinner = jest.fn((p1, p2) => p1)

  const mockArgs = ['Kent C. Dodds', 'Ken Wheeler']
  const winner = thumbWar(...mockArgs)
  expect(winner).toBe(mockArgs[0])
  // Your code:
  // expect(utils.getWinner).toHaveBeenCalledTimes(2);
  // expect(utils.getWinner).toHaveBeenNthCalledWith(1, ...mockArgs);
  // expect(utils.getWinner).toHaveBeenNthCalledWith(2, ...mockArgs);
  // console.log(utils.getWinner.mock.calls)
  expect(utils.getWinner.mock.calls).toEqual([mockArgs, mockArgs])
  // cleanup
  utils.getWinner = originalGetWinner
})

/**
 * Hints:
 * - https://jestjs.io/docs/en/mock-function-api#mockfnmockcalls
 * - https://jestjs.io/docs/en/expect#tohavebeencalledtimesnumber
 * - https://jestjs.io/docs/en/expect#tohavebeennthcalledwithnthcall-arg1-arg2-
 *
 * Checkout master branch to see the answer.
 */
