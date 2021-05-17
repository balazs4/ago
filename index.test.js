const ago = require('./');
const assert = require('assert');

[
  ['2021-01-03T15:00:00Z', '2021-01-03T15:00:42Z', '42 seconds ago'],
  ['2021-01-02T15:00:00Z', '2021-01-03T15:01:00Z', '1 day ago'],
  ['2021-01-02T15:00:00Z', '2021-01-03T15:00:42Z', '1 day ago'],
  ['2020-01-03T15:00:00Z', '2021-01-03T15:00:42Z', '1 year ago'],
].forEach((testcase) => {
  const [date, now, expected] = testcase;
  test(`[now: ${now}] '${date}' was '${expected}'`, () =>
    assert.strictEqual(ago(date, now), expected));
});

