const html = require('choo/html');
const css = require('sheetify');
const topView = require('./top');
const aboutView = require('./about');

const prefix = css('./index.css');

module.exports = function mainView (state, prev, send) {
  return html`
    <main class=${prefix} onload=${send.bind(null, 'load')}>
      ${topView(...arguments)}
      ${aboutView(...arguments)}
    </main>
  `;
};
