const choo = require('choo')
const css = require('scopedify')

css('normalize.css')
css('./view/fonts.css')
css('./view/global.css')

const app = choo({
  hash: true
})

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
