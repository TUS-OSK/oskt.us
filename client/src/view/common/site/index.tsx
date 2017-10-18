/**
 * デフォルトサイト用のレイアウト
 */

import * as React from 'react'
import styled from '../../../styled-components'
import { Link } from 'react-router-dom'

import Menu from './menu'

const Main = styled.div`
`

const Header = styled.header`
  padding: 50px 0 70px;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`

const Logo = styled(Link)`
  margin-bottom: 40px;

  font-size: 30px;
  text-decoration: none;
  letter-spacing: 0.1em;
  color: ${p => p.theme.color.primary}
`

const StyledMenu = styled(Menu)`
  width: 400px;
  font-size: 15px;
`

type Props = {
  className?: string,
  children: JSX.Element
}

const Site: React.SFC<Props> = function Site (p) {
  return (
    <Main>
      <Header className={p.className}>
        <Logo to='/'>OSK</Logo>
        <StyledMenu />
      </Header>
      { p.children }
    </Main>
  )
}

export default Site
