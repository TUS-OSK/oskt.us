const choo = require('choo')
const css = require('scopedify')

css('normalize.css')
css('font-awesome')
require('./view/partials')

const app = choo()

app.use(require('./src/reducer/loader'))
app.use(require('./src/reducer/page'))

app.route('/', require('./view/index'))
app.route('/contact', require('./view/contact'))
app.route('/page/*', require('./view/page'))
app.route('/404', require('./view/404'))

app.mount('body')
