const html = require('choo/html')
const css = require('scopedify')
const config = require('../config')
const header = require('./components/header')

const footerView = require('./footer')

const scope = css('./contact')

const TITLE = `${config.TITLE_PREFIX} - Contact`

module.exports = function contactView (state, emit) {
  if (state.title !== TITLE) emit(state.events.DOMTITLECHANGE, TITLE)

  return scope(html`
    <body class="root">
      ${header(html`
        <i class="fa fa-comments" aria-hidden="true"></i>
      `)(...arguments)}
      <section class="content">
        <h1>
          <i class="fa fa-home"></i>
          <span>Clubroom</span>
        </h1>
        <p>
          <span>神楽坂キャンパス 2号館 5階 2507教室</span>
        </p>
        <h1>
          <i class="fa fa-twitter" aria-hidden="true"></i>
          <span>Twitter</span>
        </h1>
        <p>
          <a href=${config.TWITTER_URL}>@${config.TWITTER_SCREEN_NAME}</a>
        </p>
        <h1>
          <i class="fa fa-envelope" aria-hidden="true"></i>
          <span>Mail</span>
        </h1>
        <p>
          <a href="mailto:${config.MAIL}">${config.MAIL}</a>
        </p>
      </section>
      ${footerView(...arguments)}
    </body>
  `)
}
