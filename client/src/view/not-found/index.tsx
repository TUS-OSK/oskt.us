/**
 * 見つからないよ(´・ω・`)
 */

import * as React from 'react'
import styled from 'styled-components'

import Symbol from './symbol'

const Main = styled.main`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`

type Props = {
  className?: string;
}

const NotFound: React.SFC<Props> = function NotFound (p) {
  return (
    <Main className={p.className}>
      <Symbol />
    </Main>
  )
}

export default NotFound
