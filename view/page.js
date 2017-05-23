const html = require('choo/html')
const css = require('scopedify')
const md = require('./components/md')
const header = require('./components/header')

const footerView = require('./footer')

const scope = css('./page')

module.exports = function pageView (state, emit) {
  return scope(html`
    <body class="root">
      ${header(html`
        <i class="fa fa-code-fork" aria-hidden="true"></i>
      `)(...arguments)}
      <section class="content">
        ${md(state.params.wildcard)(...arguments)}
      </section>
      ${footerView(...arguments)}
    </body>
  `)
}
