/**
 * トップページ
 */

import * as React from 'react'
import styled from '../../styled-components'

const Text = styled.h1`
  color: red;
`

export default class Index extends React.PureComponent {
  render () {
    return <Text>Hello</Text>
  }
}
