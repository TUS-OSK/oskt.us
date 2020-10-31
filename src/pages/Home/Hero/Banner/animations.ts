import { keyframes } from 'styled-components'

export const fade = keyframes`
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
`

export const flip = keyframes`
  0% {
    transform: rotateX(-90deg);
    opacity: 0;
  }

  100% {
    transform: rotateX(0deg);
    opacity: 1;
  }
`

export const pic = keyframes`
  0% {
    height: 80%;
  }

  100% {
    height: 100%;
  }
`
