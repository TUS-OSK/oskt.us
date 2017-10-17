/**
 * メニュー
 */

import * as React from 'react'
import { Link } from 'react-router-dom'
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

const Item = styled(Link)`
  text-decoration: none;
  color: rgba(0, 0, 0, 0.4);
`

export default () => (
  <nav>
    <Menu>
      {
        config.menu.map((v, i) => (
          <ItemWrap key={i}>
            <Item to={v.path}>{v.label}</Item>
          </ItemWrap>
        ))
      }
    </Menu>
  </nav>
)
