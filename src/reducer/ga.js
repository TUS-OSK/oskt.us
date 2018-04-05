const config = require('../../config.json')

module.exports = function ga (state, emitter) {
  state.ga = {
    afterNavigate: false
  }

  emitter.on(state.events.NAVIGATE, () => {
    state.ga.afterNavigate = true
  })

  emitter.on(state.events.DOMTITLECHANGE, () => {
    if (state.ga.afterNavigate) {
      const path = document.location.hash.replace(/#/, '/').replace(/\?.*$/, '')
      global.gtag('config', config.GA_TRACKING_ID, {
        page_path: path
      })
      state.ga.afterNavigate = false
    }
  })
}
