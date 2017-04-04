const keys = require('../keys')

module.exports = function loader (state, emitter) {
  state.load = false
  emitter.on(keys.load, () => {
    state.load = true
    emitter.emit('render')
  })
}
