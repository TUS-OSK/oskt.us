module.exports = function fixScroll (state, emitter) {
  emitter.on(state.events.NAVIGATE, () => {
    window.scrollTo(0, 0)
  })
}
