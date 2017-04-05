const html = require('choo/html')
const css = require('scopedify')
const CONST = require('../src/constants')

const scope = css('./access')

module.exports = function accessView (state, emit) {
  return scope(html`
    <section class="root">
      <div class="box location">
        <div>
          <div class="title">
            <i class="fa fa-compass" aria-hidden="true"></i>
            <div class="text">LOCATION</div>
          </div>
          <div class="content">
            <p>
              <i class="fa fa-map-marker" aria-hidden="true"></i>
              <span>東京理科大学神楽坂キャンパス</span>
            </p>
            <p>
              <span>2号館5階</span>
              <span>#2507</span>
            </p>
          </div>
        </div>
      </div>
      <div class="box contact">
        <div>
          <div class="title">
            <i class="fa fa-comments" aria-hidden="true"></i>
            <div class="text">CONTACT</div>
          </div>
          <div class="content">
            <p>
              <a href=${CONST.TWITTER_URL}>
                <i class="fa fa-twitter" aria-hidden="true"></i>
                <span>${CONST.TWITTER_SCREEN_NAME}</span>
              </a>
            </p>
            <p>
              <a href="mailto:${CONST.MAIL}">
                <i class="fa fa-envelope" aria-hidden="true"></i>
                <span>${CONST.MAIL}</span>
              </a>
            </p>
          </div>
        </div>
      </div>
    </section>
  `)
}
