const domify = require('domify')
const keys = require('../keys')
const onload = require('on-load')

module.exports = function page (state, emitter) {
  state.page = {}

  emitter.on(keys.page, (path) => {
    state.page[path] = {
      status: 'loading'
    }
    const xhr = new window.XMLHttpRequest()
    xhr.onreadystatechange = () => {
      if (xhr.readyState === 4) {
        if (xhr.status === 200 || xhr.status === 304) {
          state.page[path].status = 'ready'
          const dom = domify(xhr.responseText)
          state.page[path].dom = dom
          dom.querySelectorAll('.twitter-tweet').forEach((elm) => {
            onload(elm, () => {
              try {
                window.twttr.widgets.load(document.querySelectorAll('.twitter-tweet'))
              } catch (e) {
              }
            }, null, _ => _)
          })
        } else {
          state.page[path].status = 'error'
        }
        emitter.emit('render')
      }
    }
    xhr.open('GET', `/page/${path}.html`)
    xhr.send()
    emitter.emit('render')
  })
}
