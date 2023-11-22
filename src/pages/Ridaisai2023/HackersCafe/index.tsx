import Link from 'next/link'
import { useEffect, useRef, useState } from 'react'
import Footer from 'src/components/Footer'
import Logo from 'src/components/Logo'
import styled from '@emotion/styled'
import { MEDIA_QUERY_MOBILE } from 'src/pages/Ridaisai2023/breakpoint/helper'
import useBreakpoint from 'src/pages/Ridaisai2023/breakpoint/useBreakPoint'
import Hero, { heroSizeCss } from 'src/pages/Ridaisai2023/Hero'
import { NavigationDLIcon, NavigationRayIcon, NavigationTopIcon, NavigationWebIcon } from 'src/pages/Ridaisai2023/NavigationIcons'
import ReactionSender from 'src/pages/Ridaisai2023/ReactionSender'
import Section from 'src/pages/Ridaisai2023/Section'
import Thumbnail from 'src/pages/Ridaisai2023/Thumbnail'
import { useContentNavigation } from 'src/pages/Ridaisai2023/useContentNavigation'
import useGetContents from 'src/pages/Ridaisai2023/useGetContents'
import useTopLogo from 'src/pages/Ridaisai2023/useTopLogo'
import { css } from '@emotion/react'
import Banner from 'src/pages/Ridaisai2023/Banner'
import Kyopro from 'src/pages/Ridaisai2023/Kyopro'
import { Tabs, TabList, Tab, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import { Example } from 'src/pages/Ridaisai2023/Graph';


const DESCRIPTION =
  '応用数学研究部(応数研,OSK)は東京理科大学一部研究会に属する部活動団体で、創部から半世紀以上たつ歴史ある団体です。コンピュータを利用してプログラミングを主に、計算機科学、WEB開発、アプリケーション開発、ゲーム開発、など様々なことに挑戦しています。'

export default function HackersCafe() {
  const currentMode = useBreakpoint()
  const scrollerRef = useRef<HTMLDivElement>(null)
  const [openLogo] = useTopLogo(scrollerRef)
  const [contentData, , importContents] = useGetContents()
  const [openMobileNavigationMenu, setMobileNavigationMenu] = useState(false)

  const [topLink, topAnchor] = useContentNavigation('top', NavigationTopIcon)
  const [rayLink, rayAnchor] = useContentNavigation('ray', NavigationRayIcon)
  const [dlLink, dlAnchor] = useContentNavigation('dl', NavigationDLIcon)
  const [webLink, webAnchor] = useContentNavigation('web', NavigationWebIcon)


  const handleClickMobileNavigationMenu = () => setMobileNavigationMenu(true)

  useEffect(() => {
    if (openMobileNavigationMenu) {
      const close = () => setMobileNavigationMenu(false)
      window.addEventListener('click', close)
      return () => window.removeEventListener('click', close)
    }
  })

  useEffect(() => {
    void importContents()
  }, [])

  return (
    <Container>
      <Scroller ref={scrollerRef}>
        <Body>
          a
        </Body>
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

const Center = styled.div`
  width: 100%;
  height: 50%;
  min-height: 280px;
`
