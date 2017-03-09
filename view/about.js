const html = require('choo/html');
const css = require('sheetify');

const prefix = css('./about.css');

module.exports = function mainView (state, prev, send) {
  return html`
    <main class=${prefix}>
      <h1>About</h1>
      <a href="#">top</a>
    </main>
  `;
};
