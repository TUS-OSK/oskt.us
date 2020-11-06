import { StyledLink } from 'src/utils/next/elements'
import styled from 'styled-components'

interface Props {
  href: string
  children: string
  // FIXME: カラーテーマを作ってもっと安全にする
  color: {
    primary: string
    secondary: string
  }
  className?: string
}

export default function Button({ color: { primary, secondary }, href, children, className }: Props) {
  return (
    <Container primary={primary} secondry={secondary} href={href} className={className}>
      {children}
    </Container>
  )
}

const Container = styled(StyledLink)<{ primary: string; secondry: string }>`
  display: inline-flex;
  align-items: center;
  font-size: 13px;
  line-height: 22px;
  font-family: 'novecentosans', sans-serif;
  font-weight: bold;
  padding: 5px 20px;
  text-decoration: none;
  cursor: pointer;
  transition-property: background-color, color, opacity;
  transition-duration: 0.2s;
  transition-timing-function: ease;
  user-select: none;

  background-color: ${(p) => p.secondry};
  color: ${(p) => p.primary};
  border: 1px solid ${(p) => p.primary};

  &:hover {
    background-color: ${(p) => p.primary};
    color: ${(p) => p.secondry};
  }

  &:active {
    opacity: 0.7;
  }
`
