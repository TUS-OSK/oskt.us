import { css, FlattenSimpleInterpolation, keyframes } from 'styled-components'

// easing
export const SWIFT = 'cubic-bezier(0.7, 0, 0.1, 1)'

export const CUBIC_OUT = 'cubic-bezier(0.22, 0.61, 0.36, 1)'

export const BOUNCE = 'cubic-bezier(1, -0.12, 0.44, 1.65)'

export const PARABOLA = 'cubic-bezier(0.28, 1.15, 0.81, 1.69)'

export type AnimationFn = () => FlattenSimpleInterpolation[]

type TypedAnimation = {
  [key in number]: {
    [key in string]?: AnimationFn
  }
}

export type Animations<T extends TypedAnimation> = {
  [type in keyof T]: {
    duration: number
    delay: number
    animation: T[type]
  }
}

export const animationCreator = <T extends TypedAnimation>(animations: Animations<T>) => ({
  animation: <N extends number>(number: N, animationName: keyof T[N]) => {
    return Object.keys(animations)
      .map((key) => parseInt(key, 10) as keyof typeof animations)
      .reduce<{ duration: number; delay: number; style: FlattenSimpleInterpolation }>(
        (prev, current) => {
          if (current < number) {
            const { duration, delay } = animations[current]
            return {
              ...prev,
              delay: prev.delay + duration + delay,
            }
          }

          if (current === number) {
            const { duration, delay, animation } = animations[current]
            const animationFn = (animation as TypedAnimation[N])[animationName]

            if (typeof animationFn !== 'function') {
              throw animationFn
            }

            const [from, to] = animationFn()
            const animationKey = keyframes`
          to {
            ${to}
          }
          `
            const animationDuration = duration
            const animationDelay = prev.delay + delay
            const animationCss = css`
              ${from}
              animation: ${animationDuration}s ${animationKey} ${animationDelay}s ease forwards;
            `
            return {
              duration: animationDuration,
              delay: animationDelay,
              style: animationCss,
            }
          }
          return prev
        },
        { duration: 0, delay: 0, style: css`` }
      )
  },
})
