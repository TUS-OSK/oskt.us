import Link from 'next/link'
import { useRef } from 'react'
import Footer from 'src/components/Footer'
import Logo from 'src/components/Logo'
import styled, { css } from 'styled-components'
import { Hero, heroSizeCss } from './Hero'
import { NavigationDLIcon, NavigationRayIcon, NavigationTopIcon, NavigationWebIcon } from './NavigationIcons'
import Section from './Section'
import Thumbnail from './Thumbnail'
import useTopLogo from './useTopLogo'

const DESCRIPTION =
  '応用数学研究部(応数研,OSK)は東京理科大学一部研究会に属する部活動団体で、創部から半世紀以上たつ歴史ある団体です。コンピュータを利用してプログラミングを主に、計算機科学、WEB開発、アプリケーション開発、ゲーム開発、など様々なことに挑戦しています。'

export default function Ridaisai2021() {
  const scrollerRef = useRef<HTMLDivElement>(null)
  const [openLogo] = useTopLogo(scrollerRef)

  return (
    <Container>
      <Scroller ref={scrollerRef}>
        <Hero />
        <Body>
          <AsideContents>
            <Navigation>
              <NavigationTopIcon />
              <NavigationRayIcon />
              <NavigationDLIcon />
              <NavigationWebIcon />
            </Navigation>
          </AsideContents>
          <MainContents>
            <SectionWrapper backgroundColor="black" active={false}>
              <Section title="OSKとは" description={DESCRIPTION}>
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
              </Section>
            </SectionWrapper>
            <SectionWrapper backgroundColor="black" active={false}>
              <Section title="レイトレ" description="">
                準備中
              </Section>
            </SectionWrapper>
            <SectionWrapper backgroundColor="black" active={false}>
              <Section title="機械学習" description="">
                準備中
              </Section>
            </SectionWrapper>
            <SectionWrapper backgroundColor="black" active={false}>
              <Section title="Web" description="">
                <Thumbnail
                  title="2021年度理大祭特設ページ"
                  description="ここはWeb班によって制作されています！"
                  src="/images/ridaisai/2021/web-1.png"
                  url=""
                />
              </Section>
            </SectionWrapper>
          </MainContents>
        </Body>
        <Footer></Footer>
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
  width: 160px;
  padding-top: ${HEADER_HEIGHT};
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
`

const AsideContents = styled.div``

const Body = styled.div`
  position: relative;
  display: flex;
  background-color: white;
`

const SectionWrapper = styled.div<{ backgroundColor: string; active: boolean }>`
  padding: 80px 0;
  transition: 0.2s background-color ease;
  background-color: ${({ backgroundColor, active }) => (active ? backgroundColor : '#FFF')};
`
