const html = require('choo/html')
const css = require('scopedify')
const config = require('../config')
const header = require('./components/header')

const footerView = require('./footer')

const scope = css('./calendar')

const TITLE = `${config.TITLE_PREFIX} - Calendar`

module.exports = function calendarView (state, emit) {
  if (state.title !== TITLE) emit(state.events.DOMTITLECHANGE, TITLE)

  return scope(html`
    <body class="root">
      ${header(html`
        <i class="fa fa-calendar-check-o" aria-hidden="true"></i>
      `)(...arguments)}
      <section class="content">
      <iframe src="https://calendar.google.com/calendar/embed?src=kagu.tus.osk%40gmail.com&ctz=Asia%2FTokyo&showTitle=0&amp;showNav=0&amp;showPrint=0&amp;showTabs=0&amp;showCalendars=0&amp;showTz=0&amp;height=600&amp;wkst=1&amp;bgcolor=%23FFFFFF&amp;src=kagu.tus.osk%40gmail.com&amp;color=%238D6F47&amp;ctz=Asia%2FTokyo&amp;hl=ja" style="border-width:0" width="800" height="600" frameborder="0" scrolling="no"></iframe>
      </section>
      ${footerView(...arguments)}
    </body>
  `)
}
