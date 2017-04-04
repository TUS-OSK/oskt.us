const html = require('choo/html')
const css = require('scopedify')
const md = require('./components/md')

const scope = css('./news')

const NEWS_PATH = 'main/news'

module.exports = function newsView (state, emit) {
  return scope(html`
    <section class="root">
      <div>
        <div class="title">NEWS</div>
        ${md(NEWS_PATH)(...arguments)}
      </div>
    </section>
  `)
}
