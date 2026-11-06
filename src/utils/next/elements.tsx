import Link from 'next/link'
import { ReactNode } from 'react'
import styled from '@emotion/styled'

interface StyledLinkProps {
  href: string
  children: ReactNode
  className?: string
}

// 旧実装は `<Link passHref><a>...</a></Link>` という、Next.js 12以前の
// legacyBehavior前提のパターンだった。Next 13+のLinkはpassHref無指定でも
// それ自身が<a>を描画するため、子に<a>(StyledLink_)を渡すと<a>の中に<a>が
// ネストしてしまい、ブラウザがそれを矯正した結果サーバー側の出力と食い違って
// 全ページでハイドレーションエラーになっていた(2026-11、Next 16移行時の見落とし)。
// Next.js純正のLinkにclassNameを直接渡す形に修正する。
export function StyledLink({ href, children, className }: StyledLinkProps) {
  return (
    <StyledLink_ href={href} className={className}>
      {children}
    </StyledLink_>
  )
}

const StyledLink_ = styled(Link)`
  text-decoration: none;
  cursor: pointer;
`
