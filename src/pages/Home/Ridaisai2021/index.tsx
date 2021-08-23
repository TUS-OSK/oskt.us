import Link from 'next/link'
import { useEffect, useRef, useState } from 'react'
import Logo from 'src/components/Logo'
import styled, { css } from 'styled-components'
import { Hero, heroSizeCss } from './Hero'
import Section from './Section'

export default function Ridaisai2021() {
  const scrollerRef = useRef<HTMLDivElement>(null)
  const scrollYCache = useRef<number | null>(null)
  const [openLogo, setOpenLogo] = useState(true)

  useEffect(() => {
    const closeLogo = () => {
      if (scrollerRef.current === null) {
        return
      }

      const scrollY = scrollerRef.current.scrollTop
      if (scrollerRef.current.scrollTop > window.innerHeight) {
        return setOpenLogo(false)
      }

      if (scrollYCache.current === null) {
        scrollYCache.current = scrollY
        return
      }

      const threshold = 24
      const diff = scrollY - scrollYCache.current
      if (diff > threshold) {
        scrollYCache.current = scrollY
        return setOpenLogo(false)
      }
      if (diff < -threshold) {
        scrollYCache.current = scrollY
        return setOpenLogo(true)
      }
    }

    scrollerRef.current?.addEventListener('scroll', closeLogo)
    return () => scrollerRef.current?.removeEventListener('scroll', closeLogo)
  }, [])

  useEffect(() => {
    if (scrollerRef.current && scrollerRef.current.scrollTop > window.innerHeight && openLogo) {
      setOpenLogo(false)
    }
  }, [])

  return (
    <Container>
      <Scroller ref={scrollerRef}>
        <Hero />
        <Body>
          <AsideContents>
            <Navigation>概要</Navigation>
          </AsideContents>
          <MainContents>
            <Section
              title="概要"
              description="
              応用数学研究部(応数研,
              OSK)は東京理科大学一部研究会に属する部活動団体で、創部から半世紀以上たつ歴史ある団体です。コンピュータを利用してプログラミングを主に、計算機科学、WEB
              開発、アプリケーション開発、ゲーム開発、など様々なことに挑戦しています。
            "
            >
              contents!
            </Section>
          </MainContents>
        </Body>
        <Header>
          <LogoWrapper open={openLogo}>
            <Logo />
          </LogoWrapper>
          <Link href="/" passHref>
            <HomePageNavigation>
              応用数学研究部のHPへ
              <svg width="32" height="32" viewBox="0 0 32 32" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M14.9907 3.56116C15.7854 2.79395 17.0515 2.8162 17.8187 3.61085L29.78 16L17.8187 28.3892C17.0515 29.1838 15.7854 29.206 14.9907 28.4388C14.1961 27.6716 14.1738 26.4055 14.941 25.6108L22.289 18H4C2.89543 18 2 17.1046 2 16C2 14.8955 2.89543 14 4 14H22.2891L14.941 6.38915C14.1738 5.5945 14.1961 4.32836 14.9907 3.56116Z"
                />
              </svg>
            </HomePageNavigation>
          </Link>
        </Header>
      </Scroller>
    </Container>
  )
}

const Container = styled.div`
  overflow: hidden;
`

const Scroller = styled.div`
  position: relative;
  z-index: 0;
  height: 100vh;
  overflow-y: auto;
`

const HEADER_HEIGHT = '80px'
const Header = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: ${HEADER_HEIGHT};
  padding: 0 40px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`

const LogoWrapper = styled.div<{ open: boolean }>`
  transition: all 0.2s;
  transform-origin: top center;

  ${(p) =>
    p.open
      ? css`
          visibility: visible;
          opacity: 1;
          transform: rotateX(0);
        `
      : css`
          visibility: hidden;
          opacity: 0;
          transform: rotateX(-45deg);
        `}
`

const HomePageNavigation = styled.a`
  font-size: 20px;
  font-weight: bold;
  display: grid;
  grid-auto-flow: column;
  gap: 8px;
  align-items: center;
  padding: 4px 16px;
  background-color: rgba(255, 255, 255, 0.8);
  color: black;
  text-decoration: none;
  transition: transform 0.2s ease;

  :hover {
    cursor: pointer;
    transform: scale(1.05);
  }
`

const Navigation = styled.div`
  position: sticky;
  top: 0;
  width: 108px;
  padding-top: 42px;
  box-sizing: border-box;
  display: grid;
  justify-content: center;
  ${heroSizeCss};
`

const MainContents = styled.div`
  flex: 1;
  overflow: hidden;
  height: 200vh;
  padding: 80px;
`

const AsideContents = styled.div``

const Body = styled.div`
  position: relative;
  display: flex;
  background-color: white;
`
