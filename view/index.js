const html = require('choo/html');
const css = require('sheetify');

const prefix = css('./index.css');

module.exports = function mainView (state, prev, send) {
  return html`
    <main class=${prefix} onload=${send.bind(null, 'load')}>
      <div class="base ${state.load ? 'anim' : ''}">
        <div class="middle">
          <div class="reveal">
            <div class="bar left">
              <div class="parens left">{</div>
            </div>
            <div class="typo">
              <div class="text">OSK</div>
            </div>
            <div class="bar right">
              <div class="parens right">}</div>
            </div>
          </div>
        </div>
        <div class="o">
          <div class="rel">
            <div class="circ first"></div>
            <div class="circ second"></div>
            <div class="circ third"></div>
            <div class="circ fourth"></div>
          </div>
        </div>
        <div class="cover">
          <nav class="menu">
            <ul class="list">
              <li class="item"><a href="#about">About</a></li>
              <li class="item"><a href="#location">Location</a></li>
              <li class="item"><a href="#schedule">Schedule</a></li>
              <li class="item"><a href="#groups">Groups</a></li>
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
      </div>
    </main>
  `;
};
