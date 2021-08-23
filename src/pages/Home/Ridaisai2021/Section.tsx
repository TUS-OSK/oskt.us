import { ReactNode } from 'react'
import styled, { keyframes } from 'styled-components'

interface Props {
  title: string
  description: string
  open?: boolean
  children: ReactNode
  fluidColor?: string
}

export default function Section({ title, fluidColor = 'rgba(236, 186, 111, 0.8)', description, children }: Props) {
  return (
    <Container>
      <Background>
        <FluidRotator fluidColor={fluidColor}>
          <svg viewBox="0 0 215 217" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
            <path d="M213.5 107.5C213.5 119.181 216.873 133.938 213.5 144.5C209.592 156.737 201.658 164.042 194 174C181.597 190.127 175.373 206.218 156 213.5C143.962 218.025 124.119 216 110.5 216C90.0345 216 74.7616 215.984 59.5227 208C36.1274 195.743 29.0345 184.447 17.5345 155C12.693 142.603 0.5 124.612 0.5 110.5C0.5 99.5529 5.0226 89.9793 8 80C11.6362 67.8128 13.6549 54.512 21 44.5C30.3484 31.7574 44.1246 25.2383 58 17.5C73.836 8.66831 91.0803 0.5 110.5 0.5C118.921 0.5 127.121 1.4463 135 3.23838C148.637 6.3403 161.811 19.3515 173 27C194.691 41.8275 206.302 49.3435 213.035 75.5C216.767 90 213.5 98.0043 213.5 107.5Z" />
          </svg>
        </FluidRotator>
      </Background>
      <Title>{title}</Title>
      <Description>{description}</Description>
      <Contents>{children}</Contents>
    </Container>
  )
}

const Container = styled.div`
  display: grid;
  justify-items: center;
  position: relative;
  z-index: 0;
`

const Title = styled.div`
  font-size: 32px;
  font-weight: bold;
  margin-bottom: 16px;
`

const Description = styled.div`
  max-width: 600px;
  margin: auto;
`

const Contents = styled.div``

const rotate = keyframes`
  from {
    transform: rotate(0)
  }
  to {
    transform: rotate(360deg)
  }
`

const Background = styled.div`
  position: absolute;
  z-index: -1;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  justify-content: center;
  align-items: center;
`

const FluidRotator = styled.div<{ fluidColor: string }>`
  display: flex;
  align-items: center;
  justify-content: center;
  min-width: 800px;
  color: ${(p) => p.fluidColor};
  transform-origin: center center;
  animation: 20s ${rotate} infinite linear;
`
