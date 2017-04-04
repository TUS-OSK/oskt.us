module.exports = function compact (array) {
  return array.filter((v) => v != null)
}
