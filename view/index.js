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
        <div class="cover"></div>
      </div>
    </main>
  `;
};
