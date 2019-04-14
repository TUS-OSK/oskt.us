const choo = require('choo')
const log = require('choo-log')
const css = require('scopedify')

css('normalize.css')
css('font-awesome')
require('./view/partials')

const app = choo()

app.use(log())

app.use(require('./src/reducer/loader'))
app.use(require('./src/reducer/page'))
app.use(require('./src/reducer/fix-scroll'))
app.use(require('./src/reducer/ga'))

app.route('/', require('./view/index'))
app.route('/contact', require('./view/contact'))
app.route('/page/*', require('./view/page'))
app.route('/404', require('./view/404'))

app.mount('body')
