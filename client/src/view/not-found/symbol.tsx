/**
 * Sorry 404 Not Found
 */

import * as React from 'react'
import styled from 'styled-components'

const Wrap = styled.section`
  padding: 40px;

  text-align: center;
  border: 1px solid black;
  color: black;
`

const Text = styled.div`
  line-height: 1em;
`

const Sorry = Text.extend`
  font-size: 30px;
  letter-spacing: 1px;
`

const Status404 = Text.extend`
  font-size: 60px;
  letter-spacing: 1px;
`

const NotFound = Text.extend`
  font-size: 17px;
  letter-spacing: 3px;
`

type Props = {
  className?: string;
}

const NotFoundSymbol: React.SFC<Props> = function NotFoundSymbol (p) {
  return (
    <Wrap className={p.className}>
      <Sorry>Sorry :(</Sorry>
      <Status404>404</Status404>
      <NotFound>Not Found</NotFound>
    </Wrap>
  )
}

export default NotFoundSymbol
