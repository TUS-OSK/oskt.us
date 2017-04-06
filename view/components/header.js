const html = require('choo/html')
const css = require('scopedify')
const menu = require('./menu')

const scope = css('./header')

module.exports = function (iconSlot) {
  return function headerView (state, emit) {
    return scope(html`
      <header class="root">
        <div class="text">
          <a href="#">
            ${iconSlot}
            <span>OSK</span>
          </a>
        </div>
        <nav class="menu">
          ${menu(...arguments)}
        </nav>
      </header>
    `)
  }
}
