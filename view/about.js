const html = require('choo/html')
const css = require('scopedify')

const scope = css('./about.css')

module.exports = function aboutView (state, emit) {
  return scope(html`
    <section class="root">
      <div class="text">OSK</div>
    </section>
  `)
}
