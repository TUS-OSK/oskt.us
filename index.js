const choo = require('choo');
const app = choo({
  hash: true,
});

app.model({
  state: { title: 'No title' },
  reducers: {
    update(state, data) {
      return { title: data };
    },
  },
});

app.router([
  ['/', require('./view/index')],
  ['/about', require('./view/about')],
]);

const tree = app.start();
document.body.appendChild(tree);
