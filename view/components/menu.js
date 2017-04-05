const html = require('choo/html')
const css = require('scopedify')
const CONST = require('../../src/constants')

const scope = css('./menu')

module.exports = function topView (state, emit) {
  return scope(html`
    <ul class="root">
      <li class="item"><a href="#page/main/about">About</a></li>
      <li class="item"><a href="#page/main/location">Location</a></li>
      <li class="item"><a href="#page/main/schedule">Schedule</a></li>
      <li class="item"><a href="#archive">Archive</a></li>
      <li class="item"><a href=${CONST.TWITTER_URL}>Twitter</a></li>
    </ul>
  `)
}
