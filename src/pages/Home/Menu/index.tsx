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
          <li>
            <MenuLink href={href}>{label}</MenuLink>
          </li>
        ))}
      </MenuList>
    </Container>
  )
}

const Container = styled.div`
  display: flex;
  justify-content: center;
  position: absolute;
  left: 0;
  width: 100%;
  top: 11%;
  animation: ${slideMenu} ${T_SLIDE}s ${SWIFT} ${T_AROUND}s 1 normal both running;
`

const MenuList = styled.div`
  color: black;
  margin: 0;
  list-style: none;
  width: 400px;
  padding: 0 10px;
  box-sizing: border-box;
  display: grid;
  grid-auto-flow: column;
  gap: 5px;
  justify-content: space-around;
`

const MenuLink = styled(StyledLink)`
  color: rgba(0, 0, 0, 0.4);
  padding-bottom: 2px;
  border-bottom: solid 1px rgba(0, 0, 0, 0.4);
  font-size: 15px;
`
