import Link from 'next/link'
import { ReactNode } from 'react'
import styled from '@emotion/styled'

interface StyledLinkProps {
  href: string
  children: ReactNode
  className?: string
}

export function StyledLink({ href, children, className }: StyledLinkProps) {
  return (
    <Link href={href} passHref>
      <StyledLink_ className={className}>{children}</StyledLink_>
    </Link>
  )
}

const StyledLink_ = styled.a`
  text-decoration: none;
  cursor: pointer;
`
