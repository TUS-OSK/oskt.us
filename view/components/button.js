const html = require('choo/html')
const css = require('scopedify')
const comp = require('../../utils/comp')
const compact = require('../../utils/compact')
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
