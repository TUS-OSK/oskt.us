import * as React from 'react'
import styled from '../../../styled-components'

import Menu from './menu'

const Header = styled.header`
`

export default (p: { children: JSX.Element }) => (
  <Header>
    <Menu />
    { p.children }
  </Header>
)
