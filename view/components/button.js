const html = require('choo/html')
const css = require('scopedify')
const comp = require('../../util/comp')
const compact = require('../../util/compact')
const scope = css('./button')

module.exports = function (opt) {
  return function button (state, emit) {
    return comp(...compact([scope, opt.style]))(html`
      <a href=${opt.href || '#'}>
        ${opt.child || ''}
      </a>
    `)
  }
}
