import React, { useCallback, useEffect, useRef, useState } from 'react'
import styled, { css, keyframes } from 'styled-components'
import { heroAnimation, HERO_BACKGROUND_COLOR } from './heroAnimation'
import OSKIcon from './OSKIcon'

type HeroProps =
  | {
      // NOTE: Heroの大きさがわかっていない状態
      ready: false
    }
  | {
      ready: true
      smallerWindowThanHero: boolean
      heroHeight: number
    }

export function Hero() {
  const heroRef = useRef<HTMLDivElement>(null)
  const [smallerWindowThanHero, setSmallerWindowThanHero] = useState<boolean | null>(null)

  const checkWindowHeight = useCallback((heroHeight: number) => {
    setSmallerWindowThanHero(window.innerHeight < heroHeight)
  }, [])

  useEffect(() => {
    if (heroRef.current) {
      checkWindowHeight(heroRef.current.clientHeight)
    }
  }, [])

  useEffect(() => {
    if (heroRef.current) {
      const resizeObserver = new ResizeObserver((entries) => {
        for (let entry of entries) {
          checkWindowHeight(entry.target.clientHeight)
        }
      })
      resizeObserver.observe(heroRef.current)

      return () => resizeObserver.disconnect()
    }
  }, [])

  return (
    <Container
      ref={heroRef}
      {...(smallerWindowThanHero !== null
        ? { ready: true, smallerWindowThanHero, heroHeight: heroRef.current?.clientHeight ?? 0 }
        : { ready: false })}
    >
      <HeroIcon>
        <OSKIcon />
      </HeroIcon>
      <HeroText>２０２１年度 理大祭 特設ページ</HeroText>

      <ScrollGuide>
        <svg width="60" height="60" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M32 8V45.8125L37.7985 41.1268L40.3126 44.2379L28 54.1875V8H32Z"
            fill="black"
          />
        </svg>
        scroll
        <Mask />
      </ScrollGuide>
    </Container>
  )
}

const ScrollGuide = styled.div`
  margin-top: 40px;
  position: relative;
  z-index: 0;
  display: flex;
  align-items: center;
  font-size: 24px;
  font-family: 'novecentosans', sans-serif;
  font-weight: bold;
  overflow: hidden;
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

const Mask = styled.div`
  background-color: ${HERO_BACKGROUND_COLOR};
  position: absolute;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;

  ${maskFrom}
  animation: 1s ${mask} 1s infinite;
`

export const heroSizeCss = css`
  /*  NOTE: windowのサイズによって, max( 600px, 100vh ) の大きさになる */
  min-height: 600px;
  height: 100vh;
`

const Container = styled.div<HeroProps>`
  display: grid;
  justify-items: center;
  align-content: center;
  ${heroSizeCss}

  ${(p) =>
    p.ready &&
    css`
      position: sticky;
      /* NOTE: Heroの大きさによってstickyの位置を少しずらすことによって, スクロールしたときにHeroの中身が全部見れるようにする */
      top: ${p.smallerWindowThanHero ? `calc(100vh - ${p.heroHeight}px)` : 0};
      z-index: -1;

      ${() => {
        const { style } = heroAnimation(2, 'fadeInBackground')
        return style
      }};
    `}
`

const HeroIcon = styled.div`
  transform-origin: bottom left;
  ${() => {
    const { style } = heroAnimation(1, 'popIcon')
    return style
  }}
`

const HeroText = styled.div`
  margin-top: 16px;
  font-size: 40px;
  font-weight: bold;
  ${() => {
    const { style } = heroAnimation(2, 'fadeInText')
    return style
  }}
`
