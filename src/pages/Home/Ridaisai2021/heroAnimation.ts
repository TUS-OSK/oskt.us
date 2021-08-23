import { css } from 'styled-components'
import { animationCreator, AnimationFn, Animations } from 'src/utils/animations'

export const HERO_BACKGROUND_COLOR = '#f9faf3'

type TypedAnimation = {
  1: {
    [key in 'popIcon']?: AnimationFn
  }
  2: {
    [key in 'fadeInBackground' | 'fadeInText']?: AnimationFn
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
    },
  },
} as Animations<TypedAnimation>

export const { animation: heroAnimation } = animationCreator(ANIMATIONS)
