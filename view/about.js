const html = require('choo/html')
const css = require('scopedify')

const button = require('./components/button')

const scope = css('./about')

module.exports = function aboutView (state, emit) {
  return scope(html`
    <section class="root">
      <div class="text">OSK</div>
      <div class="content">
        <p>
          応用数学研究部(応数研, OSK)は東京理科大学一部研究会に属する部活動団体で、創部から半世紀以上たつ歴史ある団体です。
        </p>
        <p>
          コンピュータを利用してプログラミングを主に、計算機科学、WEB開発、アプリケーション開発、ゲーム開発、など様々なことに挑戦しています。
        </p>
        <p class="button">
          ${button({
            child: 'DETAIL',
            href: '#about'
          })(...arguments)}
        </p>
      </div>
    </section>
  `)
}
