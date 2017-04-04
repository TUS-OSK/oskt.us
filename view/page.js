const html = require('choo/html')
const css = require('scopedify')
const md = require('./components/md')
const menu = require('./components/menu')

const scope = css('./page')

module.exports = function pageView (state, emit) {
  return scope(html`
    <body class="root">
      <header>
        <nav class="menu">
          ${menu(...arguments)}
        </nav>
      </header>
      <div class="content">
        ${md(state.params.wildcard)(...arguments)}
      </div>
    </body>
  `)
}
