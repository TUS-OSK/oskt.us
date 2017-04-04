const html = require('choo/html')
const css = require('scopedify')
const keys = require('../../src/keys')

const scope = css('./md')

module.exports = function (path) {
  return function newsView (state, emit) {
    return scope(html`
      <div class="root" onload=${emit.bind(null, keys.page, path)}>
        ${page(state.page[path])}
      </div>
    `)
  }
}

function page (p) {
  if (!p || p.status === 'loading') {
    return 'Loading...'
  } else if (p.status === 'error') {
    return 'Failed to load :('
  } else if (p.status === 'ready') {
    return p.dom
  }
}
