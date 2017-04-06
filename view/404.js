const html = require('choo/html')
const css = require('scopedify')
const header = require('./components/header')

const scope = css('./404')

module.exports = function _404View (state, emit) {
  return scope(html`
    <body class="root">
      ${header(html`
        <i class="fa fa-code-fork" aria-hidden="true"></i>
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
