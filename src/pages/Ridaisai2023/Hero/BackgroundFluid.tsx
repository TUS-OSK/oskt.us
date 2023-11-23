import { css } from '@emotion/react'
import styled from '@emotion/styled'
import FluidIcon from './FluidIcon'
import { floatAnimation, rotateAnimation } from './heroAnimation'

interface BaseProps {
  top?: number
  bottom?: number
  left?: number
  right?: number
  size: number
}

type Props = BaseProps & {
  fluidCss: ReturnType<typeof css>
}

export default function BackgroundFluid({ fluidCss, ...props }: Props) {
  return (
    <Background {...props}>
      <Animation fluidCss={fluidCss}>
        <FluidRotator>
          <FluidIcon />
        </FluidRotator>
      </Animation>
    </Background>
  )
}

const Background = styled.div<BaseProps>`
  position: absolute;
  z-index: -1;
  ${(p) =>
    p.top &&
    css`
      top: ${p.top}px;
    `}
  ${(p) =>
    p.bottom &&
    css`
      bottom: ${p.bottom}px;
    `}
  ${(p) =>
    p.left &&
    css`
      left: ${p.left}px;
    `}
  ${(p) =>
    p.right &&
    css`
      right: ${p.right}px;
    `}
  width: ${(p) => p.size}px;
  height: ${(p) => p.size}px;
  ${floatAnimation}
`

const FluidRotator = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  color: rgba(236, 186, 111, 0.2);
  transform-origin: center center;
  ${rotateAnimation}
`

const Animation = styled.div<{ fluidCss: ReturnType<typeof css> }>`
  ${(p) => p.fluidCss}
`
