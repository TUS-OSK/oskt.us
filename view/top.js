const html = require('choo/html')
const css = require('scopedify')
const menu = require('./components/menu')

const scope = css('./top')

module.exports = function topView (state, emit) {
  return scope(html`
    <section class="root">
      <div class="base ${state.load ? 'anim' : ''}">
        <nav class="menu">
          ${menu(...arguments)}
        </nav>
        <div class="pic"></div>
        <div class="names">
          <div class="name first">応用</div>
          <div class="name second">数学</div>
          <div class="name third">研究部</div>
          <div class="name fourth">東京理科大学</div>
        </div>
        <div class="arrow"></div>
      </div>
    </section>
  `)
}
