import styled from '@emotion/styled'
import { StyledLink } from 'src/utils/next/elements'

interface LinkItem {
  label: string
  href: string
}

export default function Menu() {
  const links: LinkItem[] = [
    { label: 'About', href: '/about' },
    { label: 'Schedule', href: '/schedule' },
    { label: 'News', href: '/news' },
    { label: 'Archive', href: '/archive' },
    { label: 'Contact', href: '/contact' },
    { label: 'FAQ', href: '/faq' },
  ]

  return (
    <MenuList>
      {links.map(({ href, label }) => (
        <MenuItem key={href}>
          <MenuLink href={href}>{label}</MenuLink>
        </MenuItem>
      ))}
    </MenuList>
  )
}

const MenuList = styled.ul`
  display: flex;
  flex-flow: wrap;
  justify-content: center;
  padding: 0;
  margin: 0;
`

const MenuItem = styled.li`
  /* FIXME: flex gap が Safari にも対応されたら直す */
  list-style: none;
  padding: 16px 16px 0;
`

// 白地で WCAG AA(4.5:1)を満たす濃さ。旧値 0.4 は 2.8:1 で読みにくかった
const LINK_COLOR = 'rgba(0, 0, 0, 0.62)'

const MenuLink = styled(StyledLink)`
  display: inline-flex;
  padding: 2px 0;
  color: ${LINK_COLOR};
  border-bottom: solid 1px ${LINK_COLOR};
  font-size: 15px;
`
