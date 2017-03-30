const html = require('choo/html')
const css = require('scopedify')
const topView = require('./top')
const aboutView = require('./about')

const scope = css('./index.css')

module.exports = function mainView (state, prev, send) {
  return scope(html`
    <main class="root" onload=${send.bind(null, 'load')}>
      ${topView(...arguments)}
      ${aboutView(...arguments)}
    </main>
  `)
}
