import { SWIFT } from 'src/utils/animations'
import styled from 'styled-components'
import { slideMenu } from './animations'
import { T_AROUND, T_SLIDE } from '../animations'
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
  color: black;
  margin: 0;
  list-style: none;
  box-sizing: border-box;
  display: flex;
  flex-flow: wrap;
  justify-content: center;
  animation: ${slideMenu} ${T_SLIDE}s ${SWIFT} ${T_AROUND}s 1 normal both running;
`

const MenuItem = styled.li`
  /* FIXME: flex gap が Safari にも対応されたら直す */
  padding: 16px 16px 0;
`

const MenuLink = styled(StyledLink)`
  display: inline-flex;
  padding: 2px 0;
  color: rgba(0, 0, 0, 0.4);
  border-bottom: solid 1px rgba(0, 0, 0, 0.4);
  font-size: 15px;
`
