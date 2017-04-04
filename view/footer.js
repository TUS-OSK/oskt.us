const html = require('choo/html')
const css = require('scopedify')

const scope = css('./footer')

module.exports = function footerView (state, emit) {
  return scope(html`
    <section class="root"></section>
  `)
}
