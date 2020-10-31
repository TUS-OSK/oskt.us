import { StyledLink } from 'src/utils/next/elements'
import styled from 'styled-components'

const PRIMARY_COLOR = '#bbb'
const SECONDARY_COLOR = '#333'

interface Props {
  href: string
  children: string
}

export default function Button({ href, children }: Props) {
  return <Container href={href}>{children}</Container>
}

const Container = styled(StyledLink)`
  font-size: 13px;
  font-family: 'novecentosans', sans-serif;
  font-weight: bold;
  padding: 5px 20px;
  background-color: ${SECONDARY_COLOR};
  color: ${PRIMARY_COLOR};
  border: 1px solid ${PRIMARY_COLOR};
  text-decoration: none;
  cursor: pointer;
  transition-property: background-color, color, opacity;
  transition-duration: 0.5s;
  user-select: none;

  &:hover {
    background-color: ${PRIMARY_COLOR};
    color: ${SECONDARY_COLOR};
  }

  &:active {
    opacity: 0.7;
  }
`
