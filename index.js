const choo = require('choo')
const css = require('scopedify')

css('normalize.css')
require('./view/partials')

const app = choo()

app.use(loader)
app.route('/', require('./view/index'))
app.mount('body')

function loader (state, emitter) {
  state.load = false
  emitter.on('load', () => {
    state.load = true
    emitter.emit('render')
  })
}
