import styled from '@emotion/styled'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import Logo from 'src/components/Logo'
import { color, ease, font, mq, size, space, width } from 'src/design/tokens'
import { StyledLink } from 'src/utils/next/elements'
import { JOIN_ITEM, NAV_ITEMS } from './nav'

interface Props {
  /** トップのヒーローの上に重ねる(背景を透明にし、スクロールで地を付ける) */
  overlay?: boolean
}

export default function SiteHeader({ overlay = false }: Props) {
  const { asPath } = useRouter()
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const current = asPath.split(/[?#]/)[0].replace(/\/$/, '')

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // ページを移ったらメニューを閉じる
  useEffect(() => setOpen(false), [asPath])

  return (
    <Bar data-overlay={overlay} data-solid={!overlay || scrolled || open}>
      <Inner>
        <Brand href="/" aria-label="応用数学研究部 トップページ">
          <Logo />
          <BrandName>応用数学研究部</BrandName>
        </Brand>
        <MenuButton
          type="button"
          aria-expanded={open}
          aria-controls="site-nav"
          onClick={() => setOpen((v) => !v)}
        >
          <span aria-hidden="true" />
          <Hidden>{open ? 'メニューを閉じる' : 'メニューを開く'}</Hidden>
        </MenuButton>
        <Nav id="site-nav" aria-label="サイト内" data-open={open}>
          <NavList>
            {NAV_ITEMS.map((item) => {
              const active = current === item.href || current.startsWith(`${item.href}/`)
              return (
                <li key={item.href}>
                  <NavLink href={item.href} aria-current={active ? 'page' : undefined}>
                    {item.label}
                  </NavLink>
                </li>
              )
            })}
          </NavList>
          <Join href={JOIN_ITEM.href}>{JOIN_ITEM.label}</Join>
        </Nav>
      </Inner>
    </Bar>
  )
}

const HEADER_HEIGHT = 64

const Bar = styled.header`
  position: sticky;
  top: 0;
  z-index: 50;
  height: ${HEADER_HEIGHT}px;
  color: ${color.ink};
  transition:
    background-color 0.3s ${ease},
    border-color 0.3s ${ease};
  border-bottom: solid 1px transparent;

  &[data-overlay='true'] {
    position: fixed;
    left: 0;
    right: 0;
  }
  &[data-solid='true'] {
    background-color: ${color.base};
    border-bottom-color: ${color.line};
  }
  /* backdrop-filter は fixed な子(スマホのメニュー)の基準をヘッダーに変えてしまうので、PC だけ */
  ${mq.pc} {
    &[data-solid='true'] {
      background-color: rgba(13, 13, 18, 0.78);
      backdrop-filter: blur(12px);
    }
  }
`

const Inner = styled.div`
  box-sizing: border-box;
  height: 100%;
  max-width: ${width.page};
  margin: 0 auto;
  padding: 0 ${space.md};
  display: flex;
  align-items: center;
  gap: ${space.md};
`

const Brand = styled(StyledLink)`
  display: inline-flex;
  align-items: center;
  gap: 12px;
  color: ${color.ink};

  svg {
    width: 64px;
    height: auto;
  }
`

const BrandName = styled.span`
  font-family: ${font.serif};
  font-size: ${size.sm};
  letter-spacing: 0.12em;
  color: ${color.inkMuted};

  ${mq.sp} {
    display: none;
  }
`

const Nav = styled.nav`
  margin-left: auto;
  display: flex;
  align-items: center;
  gap: ${space.md};

  ${mq.tab} {
    position: fixed;
    top: ${HEADER_HEIGHT}px;
    left: 0;
    right: 0;
    bottom: 0;
    flex-direction: column;
    align-items: stretch;
    gap: ${space.md};
    padding: ${space.lg} ${space.md};
    background: ${color.base};
    border-top: solid 1px ${color.line};
    overflow-y: auto;
    visibility: hidden;
    opacity: 0;
    transform: translateY(-8px);
    transition:
      opacity 0.25s ${ease},
      transform 0.25s ${ease},
      visibility 0s linear 0.25s;

    &[data-open='true'] {
      visibility: visible;
      opacity: 1;
      transform: none;
      transition:
        opacity 0.25s ${ease},
        transform 0.25s ${ease};
    }
  }
`

const NavList = styled.ul`
  display: flex;
  gap: ${space.md};
  margin: 0;
  padding: 0;
  list-style: none;

  ${mq.tab} {
    flex-direction: column;
    gap: 0;
    li {
      border-bottom: solid 1px ${color.line};
    }
  }
`

const NavLink = styled(StyledLink)`
  position: relative;
  display: inline-block;
  padding: 6px 0;
  font-size: ${size.sm};
  letter-spacing: 0.06em;
  color: ${color.inkMuted};
  transition: color 0.2s ${ease};

  &:hover,
  &[aria-current='page'] {
    color: ${color.ink};
  }
  &[aria-current='page']::after {
    content: '';
    position: absolute;
    left: 0;
    right: 0;
    bottom: 0;
    height: 1px;
    background: ${color.accent};
  }

  ${mq.tab} {
    display: block;
    padding: ${space.sm} 0;
    font-size: ${size.md};
    &[aria-current='page']::after {
      display: none;
    }
    &[aria-current='page'] {
      color: ${color.accent};
    }
  }
`

const Join = styled(StyledLink)`
  padding: 8px 18px;
  font-size: ${size.sm};
  letter-spacing: 0.08em;
  color: ${color.base};
  background: ${color.ink};
  border-radius: 2px;
  white-space: nowrap;
  transition: background-color 0.2s ${ease};

  &:hover {
    background: ${color.accent};
  }

  ${mq.tab} {
    text-align: center;
    padding: 14px;
    font-size: ${size.md};
  }
`

const MenuButton = styled.button`
  display: none;
  margin-left: auto;
  width: 44px;
  height: 44px;
  padding: 0;
  border: none;
  background: none;
  color: ${color.ink};
  cursor: pointer;

  ${mq.tab} {
    display: inline-flex;
    align-items: center;
    justify-content: center;
  }

  span[aria-hidden] {
    position: relative;
    width: 22px;
    height: 1px;
    background: currentColor;
    transition: background-color 0.2s ${ease};
    &::before,
    &::after {
      content: '';
      position: absolute;
      left: 0;
      width: 22px;
      height: 1px;
      background: currentColor;
      transition: transform 0.25s ${ease};
    }
    &::before {
      transform: translateY(-7px);
    }
    &::after {
      transform: translateY(7px);
    }
  }
  &[aria-expanded='true'] span[aria-hidden] {
    background: transparent;
    &::before {
      transform: rotate(45deg);
    }
    &::after {
      transform: rotate(-45deg);
    }
  }
`

const Hidden = styled.span`
  position: absolute;
  width: 1px;
  height: 1px;
  overflow: hidden;
  clip: rect(0 0 0 0);
  white-space: nowrap;
`
