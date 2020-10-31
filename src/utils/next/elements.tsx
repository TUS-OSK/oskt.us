import Link from 'next/link'
import { ReactNode } from 'react'
import styled from 'styled-components'

interface StyledLinkProps {
  href: string
  children: ReactNode
  className?: string
}

export function StyledLink({ href, children, className }: StyledLinkProps) {
  return (
    <Link href={href}>
      <StyledLink_ className={className}>{children}</StyledLink_>
    </Link>
  )
}

const StyledLink_ = styled.a`
  text-decoration: none;
  cursor: pointer;
`
