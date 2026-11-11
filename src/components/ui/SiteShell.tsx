import { css, Global } from '@emotion/react'
import styled from '@emotion/styled'
import { ReactNode } from 'react'
import { color, font, size } from 'src/design/tokens'
import SiteFooter from './SiteFooter'
import SiteHeader from './SiteHeader'

interface Props {
  children: ReactNode
  /** トップだけ: ヘッダーをヒーローの上に重ねる */
  overlayHeader?: boolean
}

// サイト共通の外枠(黒地・ヘッダー・フッター)。理大祭の過去ページは当時のデザインのまま
// 残すため、黒地の指定は body 全体ではなくこの外枠を使うページにだけかける
export default function SiteShell({ children, overlayHeader = false }: Props) {
  return (
    <>
      <Global styles={globalStyles} />
      <SkipLink href="#main">本文へ移動</SkipLink>
      <SiteHeader overlay={overlayHeader} />
      <Main id="main">{children}</Main>
      <SiteFooter />
    </>
  )
}

const globalStyles = css`
  html {
    background: ${color.base};
    color-scheme: dark;
    overscroll-behavior: none;
  }
  body {
    background: ${color.base};
    color: ${color.ink};
    font-family: ${font.sans};
    font-size: ${size.md};
    line-height: 1.8;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
  ::selection {
    background: ${color.accent};
    color: ${color.base};
  }
  :focus-visible {
    outline: solid 2px ${color.accent};
    outline-offset: 3px;
  }
  img {
    max-width: 100%;
  }
`

const SkipLink = styled.a`
  position: absolute;
  left: 8px;
  top: -48px;
  z-index: 100;
  padding: 8px 16px;
  background: ${color.ink};
  color: ${color.base};
  &:focus {
    top: 8px;
  }
`

const Main = styled.main`
  display: block;
  min-height: 60vh;
`
