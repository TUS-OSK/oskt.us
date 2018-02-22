/**
 * 最上部のタイトル
 */

import * as React from 'react'
import { Link } from 'react-router-dom'
import styled, { css } from '../../styled-components'

const titleColor = 'rgba(0, 0, 0, 0.7)'
const titleColorInversed = 'rgba(255, 255, 255, 0.7)'
const backgroundImage = '/images/bg.jpg'
const backgroundHeight = '600px'
const backgroundWidth = '100vw'

const Section = styled.section`
`

const backgroundBase = css`
  height: ${backgroundHeight};
  width: ${backgroundWidth};

  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
`

const Background = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-image: url(${backgroundImage});

  ${backgroundBase}
`

const Border = styled.div`
  padding: 4px;

  border: solid 1px ${titleColorInversed}
`

const Container = styled.div`
  padding: 48px 54px;
  display: flex;
  align-items: center;
  flex-direction: column;
  position: relative;

  overflow: hidden;
  text-align: center;
  color: ${titleColor};

  &::before {
    position: absolute;
    top: calc(100% / 2 - ${backgroundHeight} / 2);
    left: calc(100% / 2 - ${backgroundWidth} / 2);

    content: '';
    z-index: 0;
    filter: blur(8px);

    /* https://css-tricks.com/tinted-images-multiple-backgrounds/ */
    background:
      linear-gradient(
        ${titleColorInversed}, 
        ${titleColorInversed} 
      ),
      url(${backgroundImage});

    ${backgroundBase}
  }

  & > * {
    z-index: 1;
  }
`

const Name = styled.div`
  margin-bottom: 8px;

  font-size: 30px;
  font-weight: bold;
  letter-spacing: 0.2em;
`

const University = styled.div`
  font-size: 14px;
  letter-spacing: 0.2em;
`

const Description = styled.div`
  margin-bottom: 20px;

  font-size: 14px;
  letter-spacing: 0.05em;
`

const ThemanticBreak = styled.div`
  margin: 20px 0;
  width: 20px;

  border-bottom: solid 1px ${titleColor};
`

const Button = styled(Link)`
  padding: 8px 24px;

  text-decoration: none;
  border: solid 1px ${titleColor};
  color: ${titleColor};
  font-size: 13px;
  border-radius: 3px;
  transition: all 0.3s;

  &:hover {
    transform: scale(1.08);
    background-color: ${titleColor};
    color: ${titleColorInversed};
  }
`

type Props = {
  className?: string
}

const Title: React.SFC<Props> = function Title (p) {
  return (
    <Section>
      <Background>
        <Border>
          <Container>
            <Name>応用数学研究部</Name>
            <University>Tokyo University of Science</University>
            <ThemanticBreak />
            <Description>Computer Graphics / Abstract Algebra / Virtual Reality / Web</Description>
            <Button to='#'>Learn more</Button>
          </Container>
        </Border>
      </Background>
    </Section>
  )
}

export default Title
