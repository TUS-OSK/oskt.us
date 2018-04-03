const html = require('choo/html')
const css = require('scopedify')
const config = require('../config.json')
const header = require('./components/header')

const scope = css('./404')

const TITLE = `${config.TITLE_PREFIX} - Not Found`

module.exports = function _404View (state, emit) {
  if (state.title !== TITLE) emit(state.events.DOMTITLECHANGE, TITLE)

  return scope(html`
    <body class="root">
      ${header(html`
        <i class="fa fa-wrench" aria-hidden="true"></i>
      `)(...arguments)}
      <section class="content">
        <div class="wrap">
          <div class="sorry">Sorry :(</div>
          <div class="_404">404</div>
          <div class="not-found">Not Found</div>
        </div>
      </section>
    </body>
  `)
}
