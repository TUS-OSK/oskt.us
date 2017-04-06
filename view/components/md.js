const html = require('choo/html')
const css = require('scopedify')
const keys = require('../../src/keys')
const comp = require('../../util/comp')

const scope = css('./md')

module.exports = function (path) {
  return function md (state, emit) {
    function load (p) {
      if (!p || p.status === 'error') {
        emit(keys.page, path)
      }
      return p
    }

    return scope(html`
      <div class="root">
        ${comp(load, page)(state.page[path])}
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
    return p.dom.cloneNode(true)
  }
}
