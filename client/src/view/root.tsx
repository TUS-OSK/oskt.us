/**
 * ルーティング、ストアの登録を行う
 * 
 * スタイリングについての注意:
 * 
 * コンポーネント内でinheritなプロパティは出来る限り使用しない。
 * やむを得ない場合や、子孫要素への影響を意図したものは、それを明記する。
 * (例: `font-size`が10%小さくなる)
 */

import * as React from 'react'
import {
  BrowserRouter,
  Switch,
  Route
} from 'react-router-dom'

import Site from './common/site'

import Index from './index'
import NotFound from './not-found'

export default class Root extends React.PureComponent {
  render () {
    return (
      <BrowserRouter>
        <Switch>
          <Route path='/' exact component={_ => (
            <Site><Index /></Site>
          )} />
          <Route path='*' component={NotFound} />
        </Switch>
      </BrowserRouter>
    )
  }
}
