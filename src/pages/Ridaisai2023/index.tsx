// import { css } from '@emotion/react'
// import { keyframes } from '@emotion/react'
// import styled from '@emotion/styled'
// import Link from 'next/link'
// import { useRef } from 'react'
// import { Tab, TabList, TabPanel, Tabs } from 'react-tabs'
// import 'react-tabs/style/react-tabs.css';
// import Footer from 'src/components/Footer'
// import Logo from 'src/components/Logo'
// import Kyopro from 'src/pages/Ridaisai2023/Kyopro'
// import Cg from './Cg'
// import Raytracing from './Raytracing'
// import HackersCafe from './HackersCafe'
// import useTopLogo from './useTopLogo'
// import Hero, { heroSizeCss } from './Hero'
// import { SWIFT } from 'src/utils/animations'
//
//
// const MainContents = styled.div`
//   width: 100%;
//   flex: 1;
//   overflow: hidden;
//
//   padding: 80px 0;
//   ${MEDIA_QUERY_MOBILE} {
//     padding: 24px;
//   }
// `
//
// const CustomTab: ReactTabsFunctionComponent<TabProps> = ({ children, ...otherProps }) => (
//   <Tab {...otherProps}>
//     <h1>{children}</h1>
//   </Tab>
// )
//
// CustomTab.tabsRole = 'Tab' // Required field to use your custom Tab
//
// const CustomTabList: ReactTabsFunctionComponent<TabListProps> = ({ children, ...otherProps }) => (
//   <TabList {...otherProps}>
//     <Center>{children}</Center>
//   </TabList>
// )
//
// CustomTab.tabsRole = 'Tab' // Required field to use your custom Tab
// CustomTabList.tabsRole = 'TabList' // Required field to use your custom Tab
//
// export default function Ridaisai2023() {
//   const scrollerRef = useRef<HTMLDivElement>(null)
//   const [openLogo] = useTopLogo(scrollerRef)
//   return (
//     <Container>
//       <Center>
//         <Hero/>
//       </Center>
//     </Container>
//   )
//   // return (
//   //   <Container>
//   //     <Center>
//   //       <Hero/>
//   //     </Center>
//   //     <Scroller ref={scrollerRef}>
//   //       <Header>
//   //         <Link href="/" passHref>
//   //           <LogoWrapper open={openLogo}>
//   //             <Logo />
//   //           </LogoWrapper>
//   //         </Link>
//   //       </Header>
//   //       <MainContents>
//   //         <Tabs>
//   //           <TabList>
//   //             <Tab>Hackers' Cafe</Tab>
//   //             <Tab>Web班</Tab>
//   //             <Tab>競プロ班</Tab>
//   //             <Tab>CG班</Tab>
//   //             <Tab>レイトレーシング班</Tab>
//   //           </TabList>
//   //
//   //           <TabPanel>
//   //             <HackersCafe />
//   //           </TabPanel>
//   //           <TabPanel>
//   //             <h2>Under Constracitng...</h2>
//   //           </TabPanel>
//   //           <TabPanel>
//   //             <Kyopro />
//   //           </TabPanel>
//   //           <TabPanel>
//   //             <Cg />
//   //           </TabPanel>
//   //           <TabPanel>
//   //             <Raytracing />
//   //           </TabPanel>
//   //         </Tabs>
//   //       </MainContents>
//   //       <Footer></Footer>
//   //     </Scroller>
//   //   </Container>
//   // )
// }
//
// // const Scroller = styled.div`
// //   width: 100%;
// //   position: relative;
// //   scroll-behavior: smooth;
// // `
//
// export const slideArrow = keyframes`
//   0% {
//     opacity: 0;
//     transform: translateY(100%);
//   }
//   100% {
//     opacity: 1;
//     transform: translateY(0);
//   }
// `
//
// export const slideMenu = keyframes`
//   0% {
//     opacity: 0;
//     transform: translateY(-100%);
//   }
//   100% {
//     opacity: 1;
//     transform: translateY(0);
//   }
// `
//
// export const T_SLIDE = 1
// export const T_PIC = 3
// export const T_COVER = 0
// export const T_FLIP = 0.8
// export const T_AROUND = T_COVER + T_FLIP * 1.5
//
// const Scroller = styled.div`
//   width: 100%;
//   position: relative;
//   z-index: 0;
//   height: 100vh;
//   overflow-y: auto;
//   scroll-behavior: smooth;
// `
//
// const Center = styled.div`
//   width: 100%;
//   height: 50%;
//   min-height: 280px;
// `
//
// const DESKTOP_HEADER_HEIGHT = 80
// const MOBILE_HEADER_HEIGHT = 64
// const Header = styled.div`
//   position: fixed;
//   top: 0;
//   left: 0;
//   right: 0;
//   display: flex;
//   align-items: center;
//   justify-content: space-between;
//
//   height: ${DESKTOP_HEADER_HEIGHT}px;
//   padding: 0 40px;
//   ${MEDIA_QUERY_MOBILE} {
//     height: ${MOBILE_HEADER_HEIGHT}px;
//     padding: 0 24px;
//   }
// `
//
// const LogoWrapper = styled.a<{ open: boolean }>`
//   display: flex;
//   transition: all 0.2s;
//   transform-origin: top center;
//
//   ${(p) =>
//     p.open
//       ? css`
//           visibility: visible;
//           opacity: 1;
//           transform: rotateX(0);
//         `
//       : css`
//           visibility: hidden;
//           opacity: 0;
//           transform: rotateX(-45deg);
//         `}
// `
//
// const DesktopNavigation = styled.div`
//   position: sticky;
//   top: 0;
//   width: 160px;
//   padding-top: ${DESKTOP_HEADER_HEIGHT}px;
//   box-sizing: border-box;
//   display: grid;
//   justify-content: center;
//   align-content: start;
//   gap: 40px;
//   ${heroSizeCss};
// `
//
// const AsideContents = styled.div``
//
// const Body = styled.div`
//   position: relative;
//   display: flex;
//   background-color: white;
// `
//
// const SectionWrapper = styled.div<{ backgroundColor: string; active: boolean }>`
//   transition: 0.2s background-color ease;
//   background-color: ${({ backgroundColor, active }) => (active ? backgroundColor : '#FFF')};
//
//   padding: 80px 0;
//   ${MEDIA_QUERY_MOBILE} {
//     padding: 40px 0;
//   }
// `
//
// const SectionContentsAligner = styled.div`
//   display: flex;
//   gap: 24px;
//   justify-content: center;
//   flex-wrap: wrap;
// `
//
// const MobileNavigationMenu = styled.div`
//   position: relative;
//   z-index: 0;
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   background-color: rgba(255, 255, 255, 0.8);
//   border-radius: 8px;
//
//   :hover {
//     cursor: pointer;
//   }
// `
//
// const MobileNavigationMenuIcon = styled.svg<{ active: boolean }>`
//   width: 52px;
//   height: 52px;
//
//   transform: translateY(0);
//   visibility: visible;
//   transition: 0.2s all;
//   opacity: 1;
//   ${(p) =>
//     p.active &&
//     css`
//       transform: translateY(-${MOBILE_HEADER_HEIGHT}px);
//       visibility: hidden;
//       opacity: 0;
//     `}
// `
//
// const MobileNavigation = styled.div<{ active: boolean }>`
//   position: absolute;
//   z-index: 1;
//   top: 0;
//   right: 0;
//   width: max-content;
//   background-color: rgba(255, 255, 255, 0.8);
//   display: grid;
//   gap: 24px;
//   padding: 16px 8px 16px 16px;
//   border-radius: 8px;
//
//   transform: translateY(${MOBILE_HEADER_HEIGHT}px);
//   visibility: hidden;
//   opacity: 0;
//   transition: 0.2s all;
//   ${(p) =>
//     p.active &&
//     css`
//       transform: translateY(0);
//       visibility: visible;
//       opacity: 1;
//     `}
// `
//
//
// export const BALOON_HEIGHT = 40
// const BALOON_MARGIN = 40
//
// const Top = styled.div`
//   position: relative;
//   overflow: hidden;
//   display: flex;
//   flex-flow: column;
//   padding: ${BALOON_HEIGHT + BALOON_MARGIN}px 24px;
//   box-sizing: border-box;
// `
//
//
// const MenuWrapper = styled.div`
//   animation: ${slideMenu} ${T_SLIDE}s ${SWIFT} ${T_AROUND}s 1 normal both running;
// `
//
//
// const Bottom = styled.div`
//   overflow: hidden;
//   display: flex;
//   justify-content: center;
//   padding: 40px 24px;
// `
//
// const ARROW_SIZE = 40
//
// const Arrow = styled.div`
//   width: ${ARROW_SIZE}px;
//   height: ${ARROW_SIZE}px;
//   display: flex;
//   align-items: center;
//   justify-content: center;
//   animation: ${slideArrow} ${T_SLIDE}s ${SWIFT} ${T_AROUND}s 1 normal both running;
//   &::before {
//     content: '';
//     width: ${ARROW_SIZE / Math.pow(2, 0.5)}px;
//     height: ${ARROW_SIZE / Math.pow(2, 0.5)}px;
//     border-right: solid 1px rgba(0, 0, 0, 0.4);
//     border-bottom: solid 1px rgba(0, 0, 0, 0.4);
//     transform: rotate(45deg);
//   }
// `
//
// const Container = styled.div`
//   display: flex;
//   flex-flow: column;
//   justify-content: space-between;
//   width: 100%;
//   height: 100vh;
//   min-height: 600px;
//   overflow: hidden;
//   position: relative;
//   box-sizing: border-box;
//   animation-play-state: paused;
// `
//
// // const Container = styled.div`
// //   width: 100%;
// //   display: grid;
// //   justify-items: center;
// //   align-content: center;
// //   ${heroSizeCss}
// //   position: relative;
// //   overflow: hidden;
// // `
import Link from 'next/link'
import { useEffect, useRef, useState } from 'react'
import Footer from 'src/components/Footer'
import Logo from 'src/components/Logo'
import styled from '@emotion/styled'
import { MEDIA_QUERY_MOBILE } from './breakpoint/helper'
import useBreakpoint from './breakpoint/useBreakPoint'
import Hero, { heroSizeCss } from './Hero'
import { NavigationDLIcon, NavigationRayIcon, NavigationTopIcon, NavigationWebIcon } from './NavigationIcons'
import Section from './Section'
import Thumbnail from './Thumbnail'
import { useContentNavigation } from './useContentNavigation'
import useTopLogo from './useTopLogo'
import { css } from '@emotion/react'
import { Tab, TabList, TabPanel, Tabs } from 'react-tabs'
import HackersCafe from './HackersCafe'
import 'react-tabs/style/react-tabs.css'
// import Web from 'src/pages/Ridaisai2023/Kyopro'
import Kyopro from 'src/pages/Ridaisai2023/Kyopro'
import Cg from './Cg'
import Raytracing from './Raytracing'
import { shuffle } from './Kyopro'

export default function Ridaisai2023() {
  const currentMode = useBreakpoint()
  const scrollerRef = useRef<HTMLDivElement>(null)
  const [openLogo] = useTopLogo(scrollerRef)
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

  return (
    <Container>
      <Scroller ref={scrollerRef}>
        <Hero />
        <Body>
          {currentMode === 'desktop' && (
            <AsideContents>
              <DesktopNavigation>
                {topLink}
                {rayLink}
                {dlLink}
                {webLink}
              </DesktopNavigation>
            </AsideContents>
          )}
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
