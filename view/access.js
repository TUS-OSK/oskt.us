const html = require('choo/html')
const css = require('scopedify')

const scope = css('./access')

module.exports = function scheduleView (state, emit) {
  return scope(html`
    <section class="root">
      <div class="box location">
        <div class="title">LOCATION</div>
        <div class="content">
          <p>2号館5階</p>
          <p>#2507</p>
        </div>
      </div>
      <div class="box contact">
        <i class="fa fa-at" aria-hidden="true"></i>
        <div class="title">CONTACT</div>
        <div class="content"></div>
      </div>
    </section>
  `)
}
