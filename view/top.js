const html = require('choo/html')
const css = require('scopedify')
const menu = require('./components/menu')
const balloon = require('./components/balloon')

const scope = css('./top')

module.exports = function topView (state, emit) {
  return scope(html`
    <header class="root">
      <div class="base ${state.load ? 'anim' : ''}">
        <nav class="menu">
          ${menu(...arguments)}
          ${balloon(html`
            <a href="#page/2017/c92">
              <i class="fa fa-exclamation-circle" aria-hidden="true"></i>
              <span>C92情報</span>
            </a>
          `)(...arguments)}
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
    </header>
  `)
}
