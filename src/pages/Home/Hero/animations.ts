import { keyframes } from 'styled-components'

export const slideArrow = keyframes`
  0% {
    opacity: 0;
    transform: translateY(100%) rotate(45deg);
  }

  100% {
    opacity: 1;
    transform: translateY(0) rotate(45deg);
  }
`

export const T_SLIDE = 1
export const T_PIC = 3
export const T_COVER = 0
export const T_FLIP = 0.8
export const T_AROUND = T_COVER + T_FLIP * 1.5
