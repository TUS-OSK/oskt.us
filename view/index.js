const html = require('choo/html')
const css = require('scopedify')
const config = require('../config.json')
const keys = require('../src/keys')

const topView = require('./top')
const aboutView = require('./about')
const scheduleView = require('./schedule')
const newsView = require('./news')
const accessView = require('./access')
const calendarView = require('./calendar')
const footerView = require('./footer')

const scope = css('./index.css')

const TITLE = config.TITLE_PREFIX

module.exports = function mainView (state, emit) {
  if (state.title !== TITLE) emit(state.events.DOMTITLECHANGE, TITLE)

  return scope(html`
    <body class="root" onload=${emit.bind(null, keys.load)}>
      ${topView(...arguments)}
      ${aboutView(...arguments)}
      ${scheduleView(...arguments)}
      ${newsView(...arguments)}
      ${accessView(...arguments)}
      ${calendarView(...arguments)}
      ${footerView(...arguments)}
    </body>
  `)
}
