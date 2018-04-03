module.exports = function ga (state, emitter) {
  state.ga = {
    afterNavigate: false
  }

  emitter.on(state.events.NAVIGATE, () => {
    state.ga.afterNavigate = true
  })

  emitter.on(state.events.DOMTITLECHANGE, () => {
    if (state.ga.afterNavigate) {
      const path = document.location.hash.replace('#', '/')
      global.ga('set', 'title', state.title)
      global.ga('set', 'page', path)
      global.ga('send', 'pageview')
      state.ga.afterNavigate = false
    }
  })
}
