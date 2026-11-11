import styled from '@emotion/styled'
import contact from 'src/data/contact'
import Logo from 'src/components/Logo'
import { color, font, mq, size, space, width } from 'src/design/tokens'
import { StyledLink } from 'src/utils/next/elements'
import { FOOTER_EXTRA_ITEMS, JOIN_ITEM, NAV_ITEMS } from './nav'

// 著作権表記の開始年。終わりの年は現在年から自動で出す
const COPYRIGHT_START_YEAR = 2023

export default function SiteFooter() {
  const year = new Date().getFullYear()
  return (
    <Footer>
      <Inner>
        <Brand>
          <Logo />
          <Name>東京理科大学 応用数学研究部</Name>
          <Desc>数学・プログラミング・データサイエンス・統計・AI に取り組む部活(サークル)です。1959年創部。</Desc>
        </Brand>
        <Col aria-label="フッターのページ一覧">
          <ColTitle>ページ</ColTitle>
          <List>
            {[...NAV_ITEMS, JOIN_ITEM].map((item) => (
              <li key={item.href}>
                <Link href={item.href}>{item.label}</Link>
              </li>
            ))}
          </List>
        </Col>
        <Col aria-label="過去の記録">
          <ColTitle>記録</ColTitle>
          <List>
            {FOOTER_EXTRA_ITEMS.map((item) => (
              <li key={item.href}>
                <Link href={item.href}>{item.label}</Link>
              </li>
            ))}
          </List>
        </Col>
        <Col as="div">
          <ColTitle>連絡先</ColTitle>
          <List>
            <li>{contact.clubroom}</li>
            <li>
              <a href={`https://x.com/${contact.twitterId}`} target="_blank" rel="noopener">
                X @{contact.twitterId}
              </a>
            </li>
            <li>
              <a href={`mailto:${contact.mail}`}>{contact.mail}</a>
            </li>
          </List>
        </Col>
      </Inner>
      <Bottom>
        <small>
          © {COPYRIGHT_START_YEAR === year ? year : `${COPYRIGHT_START_YEAR}–${year}`} 応用数学研究部 (OSK)
        </small>
      </Bottom>
    </Footer>
  )
}

const Footer = styled.footer`
  margin-top: ${space.xxl};
  border-top: solid 1px ${color.line};
  /* 理大祭の過去ページ(白地)の下にも置くので、地の色を自分で持つ */
  background: ${color.base};
  line-height: 1.8;
  font-family: ${font.sans};
  color: ${color.inkMuted};
  font-size: ${size.sm};

  a {
    color: ${color.inkMuted};
    text-decoration: none;
    &:hover {
      color: ${color.accent};
    }
  }
`

const Inner = styled.div`
  box-sizing: border-box;
  max-width: ${width.page};
  margin: 0 auto;
  padding: ${space.xl} ${space.md} ${space.lg};
  display: grid;
  grid-template-columns: 1.6fr 1fr 1fr 1.3fr;
  gap: ${space.lg};

  ${mq.tab} {
    grid-template-columns: 1fr 1fr;
  }
  ${mq.sp} {
    grid-template-columns: 1fr;
    gap: ${space.md};
  }
`

const Brand = styled.div`
  color: ${color.ink};
  svg {
    width: 72px;
    height: auto;
  }
  ${mq.tab} {
    grid-column: 1 / -1;
  }
`

const Name = styled.p`
  margin: ${space.sm} 0 ${space.xs};
  font-family: ${font.serif};
  letter-spacing: 0.1em;
`

const Desc = styled.p`
  margin: 0;
  max-width: 28em;
  line-height: 1.8;
  color: ${color.inkSubtle};
  font-size: ${size.xs};
`

const Col = styled.nav``

const ColTitle = styled.p`
  margin: 0 0 ${space.sm};
  font-family: ${font.label};
  font-size: ${size.xs};
  letter-spacing: 0.16em;
  color: ${color.inkSubtle};
`

const List = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
  li {
    margin-bottom: 10px;
    line-height: 1.6;
  }
`

const Link = styled(StyledLink)``

const Bottom = styled.div`
  border-top: solid 1px ${color.line};
  padding: ${space.md};
  text-align: center;
  color: ${color.inkSubtle};
`
