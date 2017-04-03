const html = require('choo/html')
const css = require('scopedify')

const topView = require('./top')
const aboutView = require('./about')
const scheduleView = require('./schedule')
const accessView = require('./access')

const scope = css('./index.css')

module.exports = function mainView (state, emit) {
  return scope(html`
    <body class="root" onload=${emit.bind(null, 'load')}>
      ${topView(...arguments)}
      ${aboutView(...arguments)}
      ${scheduleView(...arguments)}
      ${accessView(...arguments)}
    </body>
  `)
}
