const html = require('choo/html')
const css = require('sheetify')

const prefix = css('./about.css')

module.exports = function aboutView (state, prev, send) {
  return html`
    <section class=${prefix}>
      <div class="text">OSK</div>
    </section>
  `
}
