const html = require('choo/html')
const css = require('scopedify')

const scope = css('./balloon')

module.exports = function (child) {
  return function balloon (state, emit) {
    return scope(html`
      <div class="root">
        ${child}
      </div>
    `)
  }
}
