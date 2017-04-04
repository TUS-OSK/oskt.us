const html = require('choo/html')
const css = require('scopedify')
const CONST = require('../../src/constants')

const scope = css('./menu')

module.exports = function topView (state, emit) {
  return scope(html`
    <ul class="root">
      <li class="item"><a href="#about">About</a></li>
      <li class="item"><a href="#location">Location</a></li>
      <li class="item"><a href="#schedule">Schedule</a></li>
      <li class="item"><a href="#groups">Groups</a></li>
      <li class="item"><a href=${CONST.TWITTER_URL}>Twitter</a></li>
    </ul>
  `)
}
