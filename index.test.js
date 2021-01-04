const ago = (date, now = new Date().toJSON()) => {
  return [
    { mod: 1000 * 60 * 60 * 24 * 7 * 4 * 12, name: "year" },
    { mod: 1000 * 60 * 60 * 24 * 7 * 4, name: "month" },
    { mod: 1000 * 60 * 60 * 24 * 7, name: "week" },
    { mod: 1000 * 60 * 60 * 24, name: "day" },
    { mod: 1000 * 60 * 60, name: "hour" },
    { mod: 1000 * 60, name: "minute" },
    { mod: 1000, name: "second" },
    { mod: 1, name: "millisecond" },
  ].reduce((io, item) => {
    if (typeof io === "string") return io;
    const value = Math.floor(io / item.mod);
    if (value === 0) return io;
    const unit = value === 1 ? item.name : `${item.name}s`;
    return `${value} ${unit} ago`;
  }, new Date(now) - new Date(date));
};

const test = require("baretest")("ago");
const assert = require("assert");

[
  ["2021-01-03T15:00:00Z", "2021-01-03T15:00:42Z", "42 seconds ago"],
  ["2021-01-02T15:00:00Z", "2021-01-03T15:01:00Z", "1 day ago"],
  ["2021-01-02T15:00:00Z", "2021-01-03T15:00:42Z", "1 day ago"],
  ["2020-01-03T15:00:00Z", "2021-01-03T15:00:42Z", "1 year ago"],
].forEach((testcase) => {
  const [date, now, expected] = testcase;
  test(`[now: ${now}] '${date}' was '${expected}'`, () =>
    assert.strictEqual(ago(date, now), expected));
});

test.run().then((allpassed) => process.exit(allpassed === true ? 0 : 1));
