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
import Cg from './Cg'
import HackersCafe from './HackersCafe'
import Hero from './Hero'
import Raytracing from './Raytracing'
import useTopLogo from './useTopLogo'

export default function Ridaisai2023() {
  const scrollerRef = useRef<HTMLDivElement>(null)
  const [openLogo] = useTopLogo(scrollerRef)
  const [openMobileNavigationMenu, setMobileNavigationMenu] = useState(false)

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
            <Tabs>
              <TabList>
                <Tab>
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


const MainContents = styled.div`
  flex: 1;
  overflow: hidden;

  padding: 80px;
  ${MEDIA_QUERY_MOBILE} {
    padding: 24px;
  }
`


const Body = styled.div`
  position: relative;
  display: flex;
  background-color: white;
  align-items: center;
`
