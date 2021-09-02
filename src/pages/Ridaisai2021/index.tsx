import Link from 'next/link'
import { useEffect, useRef, useState } from 'react'
import Footer from 'src/components/Footer'
import Logo from 'src/components/Logo'
import styled from '@emotion/styled'
import { MEDIA_QUERY_MOBILE } from './breakpoint/helper'
import useBreakpoint from './breakpoint/useBreakPoint'
import Hero, { heroSizeCss } from './Hero'
import { NavigationDLIcon, NavigationRayIcon, NavigationTopIcon, NavigationWebIcon } from './NavigationIcons'
import ReactionSender from './ReactionSender'
import Section from './Section'
import Thumbnail from './Thumbnail'
import { useContentNavigation } from './useContentNavigation'
import useGetContents from './useGetContents'
import useTopLogo from './useTopLogo'
import { css } from '@emotion/react'

const DESCRIPTION =
  '応用数学研究部(応数研,OSK)は東京理科大学一部研究会に属する部活動団体で、創部から半世紀以上たつ歴史ある団体です。コンピュータを利用してプログラミングを主に、計算機科学、WEB開発、アプリケーション開発、ゲーム開発、など様々なことに挑戦しています。'

export default function Ridaisai2021() {
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
            <SectionWrapper backgroundColor="black" active={false}>
              {topAnchor}
              <Section title="OSKとは" description={DESCRIPTION}>
                <SectionContentsAligner>
                  <blockquote className="twitter-tweet">
                    <p lang="ja" dir="ltr">
                      みなさんこんばんは！
                      <br />
                      今回、OSKの活動を画像にまとめてみました！
                      <br />
                      ぜひご覧ください。
                      <br />
                      <br />
                      興味のある方（在学生もOK）のご連絡お待ちしております！
                      <a href="https://twitter.com/hashtag/%E6%98%A5%E3%81%8B%E3%82%89%E7%90%86%E7%A7%91%E5%A4%A7?src=hash&amp;ref_src=twsrc%5Etfw">
                        #春から理科大
                      </a>
                      <a href="https://twitter.com/hashtag/%E7%90%86%E7%A7%91%E5%A4%A7?src=hash&amp;ref_src=twsrc%5Etfw">
                        #理科大
                      </a>
                      <a href="https://t.co/DQZ6pqa0uA">pic.twitter.com/DQZ6pqa0uA</a>
                    </p>
                    &mdash; 応用数学研究部 (@tus_osk)
                    <a href="https://twitter.com/tus_osk/status/1244586024262438912?ref_src=twsrc%5Etfw">
                      March 30, 2020
                    </a>
                  </blockquote>
                  <script async src="https://platform.twitter.com/widgets.js" charSet="utf-8"></script>
                </SectionContentsAligner>
              </Section>
            </SectionWrapper>
            <SectionWrapper backgroundColor="black" active={false}>
              {rayAnchor}
              <Section
                title="レイトレ"
                description="
              レイトレーシングなどを研究するRay班の成果物です！
              "
              >
                <SectionContentsAligner>
                  <Thumbnail
                    title="Ray班の制作物1"
                    description="※デスクトップ版Chromeブラウザでの閲覧を推奨します"
                    src="/images/ridaisai/2021/ray-1.png"
                    url="https://kinakomoti-321.github.io/WebPathtracer/"
                  />
                </SectionContentsAligner>
                {contentData?.ray && <ReactionSender type="ray" likeCount={contentData.ray.likeCount}></ReactionSender>}
              </Section>
            </SectionWrapper>
            <SectionWrapper backgroundColor="black" active={false}>
              {dlAnchor}
              <Section
                title="機械学習"
                description="
                機械学習・深層学習など、主にPythonを扱いながら研究をしているPython/DL班の成果物です！
              "
              >
                <SectionContentsAligner>
                  <Thumbnail
                    title="Python/DL班の研究成果1"
                    description="Pythonでモザイクアートを生成して芸術的な証明写真を作りたい！"
                    src="/images/ridaisai/2021/dl-1.jpg"
                    url="https://and-2353.github.io/Article2021/"
                  />
                  <Thumbnail
                    title="Python/DL班の研究成果2"
                    description="Pythonで機械学習して知らないキノコを毒死せずに食べる"
                    src="/images/ridaisai/2021/dl-2.jpg"
                    url="https://and-2353.github.io/Article2021/"
                  />
                </SectionContentsAligner>
                {contentData?.dl && <ReactionSender type="dl" likeCount={contentData.dl.likeCount}></ReactionSender>}
              </Section>
            </SectionWrapper>
            <SectionWrapper backgroundColor="black" active={false}>
              {webAnchor}
              <Section
                title="Web"
                description="
                Web班というWebサイトを制作する活動などをしている班の成果物です！
              "
              >
                <SectionContentsAligner>
                  <Thumbnail
                    title="2021年度理大祭特設ページ"
                    description="ここはWeb班によって制作されています！"
                    src="/images/ridaisai/2021/web-1.png"
                    url=""
                  />
                </SectionContentsAligner>
                {contentData?.web && <ReactionSender type="web" likeCount={contentData.web.likeCount}></ReactionSender>}
              </Section>
            </SectionWrapper>
          </MainContents>
        </Body>
        <Footer></Footer>
        <Header>
          <LogoWrapper open={openLogo}>
            <Logo />
          </LogoWrapper>
          {currentMode === 'desktop' ? (
            <Link href="/" passHref>
              <DekstopHPNavigation>
                応用数学研究部のHPへ
                <svg width="32" height="32" viewBox="0 0 32 32" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M14.9907 3.56116C15.7854 2.79395 17.0515 2.8162 17.8187 3.61085L29.78 16L17.8187 28.3892C17.0515 29.1838 15.7854 29.206 14.9907 28.4388C14.1961 27.6716 14.1738 26.4055 14.941 25.6108L22.289 18H4C2.89543 18 2 17.1046 2 16C2 14.8955 2.89543 14 4 14H22.2891L14.941 6.38915C14.1738 5.5945 14.1961 4.32836 14.9907 3.56116Z"
                  />
                </svg>
              </DekstopHPNavigation>
            </Link>
          ) : (
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
                <Link href="/" passHref>
                  <MobileHPNavigation>
                    <svg
                      width="32"
                      height="32"
                      viewBox="0 0 32 32"
                      fill="currentColor"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M14.9907 3.56116C15.7854 2.79395 17.0515 2.8162 17.8187 3.61085L29.78 16L17.8187 28.3892C17.0515 29.1838 15.7854 29.206 14.9907 28.4388C14.1961 27.6716 14.1738 26.4055 14.941 25.6108L22.289 18H4C2.89543 18 2 17.1046 2 16C2 14.8955 2.89543 14 4 14H22.2891L14.941 6.38915C14.1738 5.5945 14.1961 4.32836 14.9907 3.56116Z"
                      />
                    </svg>
                    HPへ
                  </MobileHPNavigation>
                </Link>
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

const DekstopHPNavigation = styled.a`
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

const MobileHPNavigation = styled.a`
  font-size: 16px;
  font-weight: bold;
  color: #6b76ff;
  text-decoration: none;
  display: grid;
  justify-content: center;
`
