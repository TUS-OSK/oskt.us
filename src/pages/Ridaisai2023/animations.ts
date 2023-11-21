import { keyframes } from '@emotion/react'

export const slideArrow = keyframes`
  0% {
    opacity: 0;
    transform: translateY(100%);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
`

export const slideMenu = keyframes`
  0% {
    opacity: 0;
    transform: translateY(-100%);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
`

export const T_SLIDE = 1
export const T_PIC = 3
export const T_COVER = 0
export const T_FLIP = 0.8
export const T_AROUND = T_COVER + T_FLIP * 1.5

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
