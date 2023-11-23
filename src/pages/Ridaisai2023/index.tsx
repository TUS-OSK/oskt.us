import { css } from '@emotion/react'
import styled from '@emotion/styled'
import Link from 'next/link'
import { useRef } from 'react'
import { Tab, TabList, TabPanel, Tabs } from 'react-tabs'
import Footer from 'src/components/Footer'
import Logo from 'src/components/Logo'
import Kyopro from 'src/pages/Ridaisai2023/Kyopro'
import Cg from './Cg'
import { heroSizeCss } from './Hero'
import Raytracing from './Raytracing'
import { MEDIA_QUERY_MOBILE } from './breakpoint/helper'
import useTopLogo from './useTopLogo'

const Container = styled.div`
  width: 100%;
  display: grid;
  justify-items: center;
  align-content: center;
  ${heroSizeCss}
  position: relative;
  overflow: hidden;
`

const MainContents = styled.div`
  width: 100%;
  flex: 1;
  overflow: hidden;

  padding: 80px 0;
  ${MEDIA_QUERY_MOBILE} {
    padding: 24px;
  }
`

const CustomTab: ReactTabsFunctionComponent<TabProps> = ({ children, ...otherProps }) => (
  <Tab {...otherProps}>
    <h1>{children}</h1>
  </Tab>
)

CustomTab.tabsRole = 'Tab' // Required field to use your custom Tab

const CustomTabList: ReactTabsFunctionComponent<TabListProps> = ({ children, ...otherProps }) => (
  <TabList {...otherProps}>
    <Center>{children}</Center>
  </TabList>
)

CustomTab.tabsRole = 'Tab' // Required field to use your custom Tab
CustomTabList.tabsRole = 'TabList' // Required field to use your custom Tab

export default function Ridaisai2023() {
  const scrollerRef = useRef<HTMLDivElement>(null)
  const [openLogo] = useTopLogo(scrollerRef)
  return (
    <Container>
      <Scroller ref={scrollerRef}>
        <Header>
          <Link href="/" passHref>
            <LogoWrapper open={openLogo}>
              <Logo />
            </LogoWrapper>
          </Link>
        </Header>
        <MainContents>
          <Tabs>
            <TabList>
              <Tab>Hackers' Cafe</Tab>
              <Tab>Web班</Tab>
              <Tab>競プロ班</Tab>
              <Tab>CG班</Tab>
              <Tab>レイトレーシング班</Tab>
            </TabList>

            <TabPanel>
              <h2>Under Constracitng...</h2>
            </TabPanel>
            <TabPanel>
              <h2>Under Constracitng...</h2>
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
        <Footer></Footer>
      </Scroller>
    </Container>
  )
}

// const Scroller = styled.div`
//   width: 100%;
//   position: relative;
//   scroll-behavior: smooth;
// `

const Scroller = styled.div`
  width: 100%;
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
  margin: auto;
`
