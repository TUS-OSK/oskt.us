/**
 * 最上部のタイトル
 */

import * as React from 'react'
import { Link } from 'react-router-dom'
import styled from '../../styled-components'

type Props = {
  className?: string
}

const Section = styled.section`
`

const Image = styled.div`
  height: 600px;
  width: 100vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  background-size: cover;
  background-position: center;
  background-image: url('/static/images/bg.jpg');
`

const Border = styled.div`
  padding: 6px;

  border: solid 1px ${p => p.theme.color.secondaryInverted}
`

const burnColor = '#080808'

const Text = styled.div`
  padding: 40px 48px;
  display: flex;
  align-items: center;
  flex-direction: column;

  text-align: center;
  background-color: ${p => p.theme.color.secondaryInverted};
  color: ${burnColor};
`

const Name = styled.div`
  margin-bottom: 8px;

  font-size: 30px;
  font-weight: bold;
  mix-blend-mode: color-burn;
  letter-spacing: 0.2em;
`

const University = styled.div`
  mix-blend-mode: color-burn;
  font-size: 14px;
  letter-spacing: 0.2em;
`

const Description = styled.div`
  margin-bottom: 16px;

  mix-blend-mode: color-burn;
  font-size: 14px;
  letter-spacing: 0.05em;
`

const ThemanticBreak = styled.div`
  margin: 16px 0;
  width: 20px;

  mix-blend-mode: color-burn;
  border-bottom: solid 1px ${burnColor};
`

const Button = styled(Link)`
  padding: 8px 24px;

  mix-blend-mode: color-burn;
  text-decoration: none;
  border: solid 1px ${burnColor};
  color: ${burnColor};
  font-size: 13px;
  border-radius: 3px;
  transition: all 0.3s;

  &:hover {
    background-color: ${burnColor};
    color: ${p => p.theme.color.secondaryInverted};
  }
`

const Title: React.SFC<Props> = function Title (p) {
  return (
    <Section>
      <Image>
        <Border>
          <Text>
            <Name>応用数学研究部</Name>
            <University>Tokyo University of Science</University>
            <ThemanticBreak />
            <Description>Applied Mathmatics / Computer Graphics / Abstract Algebra / Web</Description>
            <Button to='#'>Learn more</Button>
          </Text>
        </Border>
      </Image>
    </Section>
  )
}

export default Title
