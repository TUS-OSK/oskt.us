/**
 * 見つからないよ(´・ω・`)
 */

import * as React from 'react'
import styled from '../../styled-components'

const Text = styled.h1`
  color: blue;
`

export default class Index extends React.PureComponent {
  render () {
    return <Text>404</Text>
  }
}
