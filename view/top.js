const html = require('choo/html')
const css = require('scopedify')
const CONST = require('./misc/contants')

const scope = css('./top')

module.exports = function topView (state, emit) {
  return scope(html`
    <section class="root">
      <div class="base ${state.load ? 'anim' : ''}">
        <nav class="menu">
          <ul class="list">
            <li class="item"><a href="#about">About</a></li>
            <li class="item"><a href="#location">Location</a></li>
            <li class="item"><a href="#schedule">Schedule</a></li>
            <li class="item"><a href="#groups">Groups</a></li>
            <li class="item"><a href=${CONST.TWITTER_URL}>Twitter</a></li>
          </ul>
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
