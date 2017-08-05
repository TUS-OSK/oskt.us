const choo = require('choo')
const log = require('choo-log')
const css = require('scopedify')

css('normalize.css')
css('font-awesome')
css('./node_modules/github-markdown-css/github-markdown.css')
require('./view/partials')

const app = choo()

app.use(log())

app.use(require('./src/reducer/loader'))
app.use(require('./src/reducer/page'))

app.route('/', require('./view/index'))
app.route('/contact', require('./view/contact'))
app.route('/page/*', require('./view/page'))
app.route('/404', require('./view/404'))

app.mount('body')
