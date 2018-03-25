const html = require('choo/html')
const css = require('scopedify')
const config = require('../../config')

const scope = css('./menu')

module.exports = function menu (state, emit) {
  return scope(html`
    <ul class="root">
      <li class="item"><a href="#page/main/about">About</a></li>
      <li class="item"><a href="#page/main/schedule">Schedule</a></li>
      <li class="item"><a href="#page/main/news">News</a></li>
      <li class="item"><a href="#archive">Archive</a></li>
      <li class="item"><a href="#contact">Contact</a></li>
    </ul>
  `)
}
