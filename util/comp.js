module.exports = function comp (...args) {
  return Array.prototype.reduce.bind(args, (v, f) => f(v))
}
