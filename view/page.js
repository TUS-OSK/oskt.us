const html = require('choo/html')
const css = require('scopedify')
const md = require('./components/md')
const header = require('./components/header')

const footerView = require('./footer')

const scope = css('./page')

module.exports = function pageView (state, emit) {
  const path = state.params.wildcard

  return scope(html`
    <body class="root">
      ${header(html`
        <i class="fa fa-code-fork" aria-hidden="true"></i>
      `)(...arguments)}
      <section class="content markdown-body">
        ${md(path)(...arguments)}
      </section>
      <section class="content edit-request">
        <a href="https://github.com/TUS-OSK/oskt.us/edit/master/page/${path}.md">
          このページの編集をリクエストする
        </a>
      </section>
      ${footerView(...arguments)}
    </body>
  `)
}
