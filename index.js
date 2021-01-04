module.exports = (date, now = new Date().toJSON()) => {
  return [
    { mod: 1000 * 60 * 60 * 24 * 7 * 4 * 12, name: 'year' },
    { mod: 1000 * 60 * 60 * 24 * 7 * 4, name: 'month' },
    { mod: 1000 * 60 * 60 * 24 * 7, name: 'week' },
    { mod: 1000 * 60 * 60 * 24, name: 'day' },
    { mod: 1000 * 60 * 60, name: 'hour' },
    { mod: 1000 * 60, name: 'minute' },
    { mod: 1000, name: 'second' },
    { mod: 1, name: 'millisecond' },
  ].reduce((io, item) => {
    if (typeof io === 'string') return io;
    const value = Math.floor(io / item.mod);
    if (value === 0) return io;
    const unit = value === 1 ? item.name : `${item.name}s`;
    return `${value} ${unit} ago`;
  }, new Date(now) - new Date(date));
};
