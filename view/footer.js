const html = require('choo/html')
const css = require('scopedify')

const scope = css('./footer')

module.exports = function footerView (state, emit) {
  return scope(html`
    <section class="root">
      <div>
        <div class="copyright">Copyright (c) 2017 OSK</div>
      </div>
    </section>
  `)
}
