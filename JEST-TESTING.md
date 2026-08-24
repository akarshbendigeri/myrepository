# Unit Testing With Jest

This project uses Jest to test small pieces of JavaScript in isolation. The example in `src/utils/skillUtils.test.js` tests `countSkillsByCategory`, a pure function that does not need a browser or React.

## 1. Install Jest

The project already includes the required development dependencies:

```bash
npm install --save-dev jest babel-jest @babel/core @babel/preset-env
```

Jest runs tests. `babel-jest` and Babel translate the ES module syntax used by the Vite source files so Jest can execute it.

## 2. Understand the example

```js
test('returns the number of skills in each category', () => {
  const result = countSkillsByCategory(categories)
  expect(result).toEqual({ Frontend: 3, Cloud: 2 })
})
```

- `describe` groups related tests.
- `test` defines one behavior that must work.
- Arrange: create the input data.
- Act: call the function.
- Assert: use `expect` to compare the result with the expected value.
- `toEqual` compares object contents. Use `toBe` for primitive values such as numbers, strings, or booleans.

The other two tests cover useful edge cases: no categories and a category with zero skills.

## 3. Run the tests

Run all tests once:

```bash
npm test
```

Run one test file:

```bash
npx jest src/utils/skillUtils.test.js
```

Keep Jest running while developing:

```bash
npm run test:watch
```

Generate a coverage report:

```bash
npm run test:coverage
```

## 4. Add another unit test

For a new function, follow the same pattern:

```js
import { functionToTest } from './fileUnderTest'

test('explains the behavior being checked', () => {
  const result = functionToTest(input)
  expect(result).toBe(expectedValue)
})
```

A good unit test has one clear behavior, predictable input, and an assertion that would fail if the implementation were wrong.

## Jest and React components

Component tests need a simulated browser (`jsdom`) and usually React Testing Library. Start with pure helpers like this example because they are fast and do not require mocking browser APIs such as `IntersectionObserver`. Add component testing separately when you need to verify rendered text, user clicks, or form behavior.