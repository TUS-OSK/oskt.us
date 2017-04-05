const html = require('choo/html')
const css = require('scopedify')
const md = require('./components/md')
const menu = require('./components/menu')

const scope = css('./page')

module.exports = function pageView (state, emit) {
  return scope(html`
    <body class="root">
      <header>
        <div class="text">
          <a href="#">
            <i class="fa fa-code-fork" aria-hidden="true"></i>
            <span>OSK</span>
          </a>
        </div>
        <nav class="menu">
          ${menu(...arguments)}
        </nav>
      </header>
      <section class="content">
        ${md(state.params.wildcard)(...arguments)}
      </section>
    </body>
  `)
}
