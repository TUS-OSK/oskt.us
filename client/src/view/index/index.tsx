/**
 * トップページ
 */

import * as React from 'react'
import styled from '../../styled-components'

import Title from './title'

type Props = {
  className?: string
}

const Main = styled.main`
`

const Index: React.SFC<Props> = function Index (p) {
  return (
    <Main>
      <Title />
    </Main>
  )
}

export default Index
