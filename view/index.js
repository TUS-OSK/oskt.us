const html = require('choo/html');
const css = require('sheetify');

const prefix = css('./index.css');

module.exports = function mainView (state, prev, send) {
  return html`
    <main class=${prefix}>
      <h1>Title: ${state.title}</h1>
      <input type="text" oninput=${update} />
      <a href="#about">about</a>
    </main>
  `;

  function update (e) {
    send('update', e.target.value);
  }
};
