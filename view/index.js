const html = require('choo/html');
const css = require('sheetify');

const prefix = css('./index.css');

module.exports = function mainView (state, prev, send) {
  return html`
    <main class=${prefix} onload=${load}>
      <div class="horizontal-bar ${state.load ? 'animate' : ''}"></div>
    </main>
  `;

  function load() {
    send('load');
  }
};
