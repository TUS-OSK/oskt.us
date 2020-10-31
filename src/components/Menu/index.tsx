import styled from 'styled-components'
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
    <Container>
      <MenuList>
        {links.map(({ href, label }) => (
          <MenuItem>
            <MenuLink href={href}>{label}</MenuLink>
          </MenuItem>
        ))}
      </MenuList>
    </Container>
  )
}

const Container = styled.div`
  display: flex;
  justify-content: center;
  padding: 64px 24px;
  box-sizing: border-box;
`

const MenuList = styled.div`
  display: flex;
  flex-flow: wrap;
  justify-content: center;
`

const MenuItem = styled.li`
  /* FIXME: flex gap が Safari にも対応されたら直す */
  list-style: none;
  padding: 16px 16px 0;
`

const LINK_COLOR = 'rgba(0, 0, 0, 0.4)'

const MenuLink = styled(StyledLink)`
  display: inline-flex;
  padding: 2px 0;
  color: ${LINK_COLOR};
  border-bottom: solid 1px ${LINK_COLOR};
  font-size: 15px;
`
