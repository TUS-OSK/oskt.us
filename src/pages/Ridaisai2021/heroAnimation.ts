import { css, keyframes } from 'styled-components'
import { animationCreator, AnimationFn, Animations } from 'src/utils/animations'

export const HERO_BACKGROUND_COLOR = '#f9faf3'

const rotateFrom = css`
  transform: rotate(0);
`
const rotateTo = css`
  transform: rotate(360deg);
`
const rotate = keyframes`
  to {
    ${rotateTo}
  }
`
export const rotateAnimation = css`
  ${rotateFrom}
  animation: 60s ${rotate};
`

const floatFrom = css`
  transform: scale(1);
`
const floatHalf = css`
  transform: scale(1.05);
`
const floatTo = css`
  transform: scale(1);
`
const float = keyframes`
  50% {
    ${floatHalf}
  }
  to {
    ${floatTo}
  }
`
export const floatAnimation = css`
  ${floatFrom}
  animation: 4s ${float} infinite;
`

const maskFrom = css`
  transform: translateY(-100%);
`
const maskTo = css`
  transform: translateY(100%);
`
const mask = keyframes`
  to {
    ${maskTo}
  }
`
export const maskAnimation = css`
  ${maskFrom}
  animation: 1s ${mask} 1s infinite;
`

type TypedHeroAnimation = {
  1: {
    [key in 'popIcon']?: AnimationFn
  }
  2: {
    [key in 'fadeInBackground' | 'fadeInText' | 'popUpAndRotateBackground' | 'popUpText']?: AnimationFn
  }
  3: {
    [key in 'popUpText']?: AnimationFn
  }
}

const ANIMATIONS = {
  1: {
    duration: 0.6,
    delay: 0.4,
    animation: {
      popIcon: () => [
        css`
          opacity: 0;
          transform: rotate(-20deg);
        `,
        css`
          opacity: 1;
          transform: rotate(0);
        `,
      ],
    },
  },
  2: {
    duration: 0.4,
    delay: 0,
    animation: {
      fadeInBackground: () => [
        css`
          background-color: none;
        `,
        css`
          background-color: ${HERO_BACKGROUND_COLOR};
        `,
      ],
      fadeInText: () => [
        css`
          opacity: 0;
          transform: translateX(-8px);
        `,
        css`
          opacity: 1;
          transform: translateX(0);
        `,
      ],
      popUpAndRotateBackground: () => [
        css`
          opacity: 0;
          transform: scale(0.4) rotate(-240deg);
        `,
        css`
          opacity: 1;
          transform: scale(1) rotate(0);
        `,
      ],
    },
  },
  3: {
    duration: 0.4,
    delay: 0,
    animation: {
      popUpText: () => [
        css`
          opacity: 0;
        `,
        css`
          opacity: 1;
        `,
      ],
    },
  },
} as Animations<TypedHeroAnimation>

export const { animation: heroAnimation } = animationCreator(ANIMATIONS)
