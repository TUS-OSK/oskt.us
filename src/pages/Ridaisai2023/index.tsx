import { css } from '@emotion/react'
import styled from '@emotion/styled'
import Link from 'next/link'
import { useEffect, useRef, useState } from 'react'
import { Tab, TabList, TabPanel, Tabs } from 'react-tabs'
import 'react-tabs/style/react-tabs.css'
import Footer from 'src/components/Footer'
import Logo from 'src/components/Logo'
import Kyopro from 'src/pages/Ridaisai2023/Kyopro'
import { MEDIA_QUERY_MOBILE } from './breakpoint/helper'
import useBreakpoint from './breakpoint/useBreakPoint'
import Cg from './Cg'
import HackersCafe from './HackersCafe'
import Hero, { heroSizeCss } from './Hero'
import Raytracing from './Raytracing'
import useTopLogo from './useTopLogo'

export default function Ridaisai2023() {
  const currentMode = useBreakpoint()
  const scrollerRef = useRef<HTMLDivElement>(null)
  const [openLogo] = useTopLogo(scrollerRef)
  const [openMobileNavigationMenu, setMobileNavigationMenu] = useState(false)


  const handleClickMobileNavigationMenu = () => setMobileNavigationMenu(true)

  useEffect(() => {
    if (openMobileNavigationMenu) {
      const close = () => setMobileNavigationMenu(false)
      window.addEventListener('click', close)
      return () => window.removeEventListener('click', close)
    }
  })

  return (
    <Container>
      <Scroller ref={scrollerRef}>
        <Hero />
        <Body>
          <MainContents>
            <Tabs
              css={css`
                width: 50%;
              `}
            >
              <TabList>
                <Tab
                  css={css`
                    font-size: 10em;
                  `}
                >
                  Hackers' Cafe
                </Tab>
                <Tab>アルゴリズムクイズ by 競プロ班</Tab>
                <Tab>CG班</Tab>
                <Tab>レイトレーシング班</Tab>
              </TabList>

              <TabPanel>
                <HackersCafe />
              </TabPanel>
              <TabPanel>
                <Kyopro />
              </TabPanel>
              <TabPanel>
                <Cg />
              </TabPanel>
              <TabPanel>
                <Raytracing />
              </TabPanel>
            </Tabs>
          </MainContents>
        </Body>
        <Footer></Footer>
        <Header>
          <Link href="/" passHref>
            <LogoWrapper open={openLogo}>
              <Logo />
            </LogoWrapper>
          </Link>
          {currentMode === 'desktop' ? null : (
            <MobileNavigationMenu onClick={handleClickMobileNavigationMenu}>
              <MobileNavigationMenuIcon
                active={openMobileNavigationMenu}
                viewBox="0 0 52 52"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M10 16C10 14.8954 10.8954 14 12 14H40C41.1046 14 42 14.8954 42 16C42 17.1046 41.1046 18 40 18H12C10.8954 18 10 17.1046 10 16ZM10 26C10 24.8954 10.8954 24 12 24H40C41.1046 24 42 24.8954 42 26C42 27.1046 41.1046 28 40 28H12C10.8954 28 10 27.1046 10 26ZM10 36C10 34.8954 10.8954 34 12 34H40C41.1046 34 42 34.8954 42 36C42 37.1046 41.1046 38 40 38H12C10.8954 38 10 37.1046 10 36Z"
                  fill="black"
                />
              </MobileNavigationMenuIcon>
              <MobileNavigation active={openMobileNavigationMenu}>
                {topLink}
                {rayLink}
                {dlLink}
                {webLink}
              </MobileNavigation>
            </MobileNavigationMenu>
          )}
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
  scroll-behavior: smooth;
`

const DESKTOP_HEADER_HEIGHT = 80
const MOBILE_HEADER_HEIGHT = 64
const Header = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  display: flex;
  align-items: center;
  justify-content: space-between;

  height: ${DESKTOP_HEADER_HEIGHT}px;
  padding: 0 40px;
  ${MEDIA_QUERY_MOBILE} {
    height: ${MOBILE_HEADER_HEIGHT}px;
    padding: 0 24px;
  }
`

const LogoWrapper = styled.a<{ open: boolean }>`
  display: flex;
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

const DesktopNavigation = styled.div`
  position: sticky;
  top: 0;
  width: 160px;
  padding-top: ${DESKTOP_HEADER_HEIGHT}px;
  box-sizing: border-box;
  display: grid;
  justify-content: center;
  align-content: start;
  gap: 40px;
  ${heroSizeCss};
`

const MainContents = styled.div`
  flex: 1;
  overflow: hidden;

  padding: 80px;
  ${MEDIA_QUERY_MOBILE} {
    padding: 24px;
  }
`

const AsideContents = styled.div``

const Body = styled.div`
  position: relative;
  display: flex;
  background-color: white;
  align-items: center;
`

const SectionWrapper = styled.div<{ backgroundColor: string; active: boolean }>`
  transition: 0.2s background-color ease;
  background-color: ${({ backgroundColor, active }) => (active ? backgroundColor : '#FFF')};

  padding: 80px 0;
  ${MEDIA_QUERY_MOBILE} {
    padding: 40px 0;
  }
`

const SectionContentsAligner = styled.div`
  display: flex;
  gap: 24px;
  justify-content: center;
  flex-wrap: wrap;
`

const MobileNavigationMenu = styled.div`
  position: relative;
  z-index: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(255, 255, 255, 0.8);
  border-radius: 8px;

  :hover {
    cursor: pointer;
  }
`

const MobileNavigationMenuIcon = styled.svg<{ active: boolean }>`
  width: 52px;
  height: 52px;

  transform: translateY(0);
  visibility: visible;
  transition: 0.2s all;
  opacity: 1;
  ${(p) =>
    p.active &&
    css`
      transform: translateY(-${MOBILE_HEADER_HEIGHT}px);
      visibility: hidden;
      opacity: 0;
    `}
`

const MobileNavigation = styled.div<{ active: boolean }>`
  position: absolute;
  z-index: 1;
  top: 0;
  right: 0;
  width: max-content;
  background-color: rgba(255, 255, 255, 0.8);
  display: grid;
  gap: 24px;
  padding: 16px 8px 16px 16px;
  border-radius: 8px;

  transform: translateY(${MOBILE_HEADER_HEIGHT}px);
  visibility: hidden;
  opacity: 0;
  transition: 0.2s all;
  ${(p) =>
    p.active &&
    css`
      transform: translateY(0);
      visibility: visible;
      opacity: 1;
    `}
`
