/**
 * 上下の余白がついたセクション
 */

import styled from '../../styled-components'

const Section = styled.section`
  padding: 100px;
  box-sizing: border-box;
`

const Title = styled.h1`
  margin-top: 16px;
  margin-bottom: 60px;

  color: ${p => p.theme.color.primary};
  letter-spacing: 0.2em;
  text-align: center;
  font-size: 2.3em;
`

const Content = styled.div`
  line-height: 1.6em;
  color: ${p => p.theme.color.primarySub};
`

export { Section, Title, Content }
