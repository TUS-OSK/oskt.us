/**
 * トップページ
 */

import * as React from 'react'
import styled from '../../styled-components'

import Title from './title'
import About from './about'
import Description from './description'

const Main = styled.main`
`

type Props = {
  className?: string
}

const Index: React.SFC<Props> = function Index (p) {
  return (
    <Main className={p.className}>
      <Title />
      <About />
      <Description />
    </Main>
  )
}

export default Index
