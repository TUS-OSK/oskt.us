/**
 * メニュー
 */

import * as React from 'react'
import styled from '../../../styled-components'
import config from '../../../config'

const Menu = styled.nav`
  margin: 0;
  padding: 0;
  list-style: none;
  display: flex;
  justify-content: space-around;
`

const ItemWrap = styled.li`
`

const Item = styled.a`
  text-decoration: none;
  color: rgba(0, 0, 0, 0.4);
`

export default () => (
  <nav>
    <Menu>
      {
        config.menu.map((v, i) => (
          <ItemWrap key={i}>
            <Item href={v.path}>{v.label}</Item>
          </ItemWrap>
        ))
      }
    </Menu>
  </nav>
)
