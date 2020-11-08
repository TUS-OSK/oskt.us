import { StyledLink } from 'src/utils/next/elements'
import styled from 'styled-components'
import Logo from '../Logo'
import Menu from '../Menu'

export default function Header() {
  return (
    <Container>
      <StyledLink href="/">
        <Logo></Logo>
      </StyledLink>
      <MenuWrapper>
        <Menu></Menu>
      </MenuWrapper>
    </Container>
  )
}

const Container = styled.header`
  margin-top: 60px;
  display: flex;
  flex-flow: column;
  align-items: center;
`

const MenuWrapper = styled.nav`
  margin-top: 24px;
`
