const choo = require('choo');
const css = require('sheetify');
const app = choo({
  hash: true,
});

css('normalize.css');
css('./view/fonts.css');
css('./view/global.css');

app.model({
  state: {
    load: false,
  },
  reducers: {
    load() {
      return { load: true };
    },
  },
});

app.router([
  ['/', require('./view/index')],
]);

const tree = app.start();
document.body.appendChild(tree);
