import Link from 'next/link'
import { AnchorHTMLAttributes, ReactNode } from 'react'
import styled from '@emotion/styled'

type StyledLinkProps = Omit<AnchorHTMLAttributes<HTMLAnchorElement>, 'href'> & {
  href: string
  children: ReactNode
}

// 旧実装は `<Link passHref><a>...</a></Link>` という、Next.js 12以前の
// legacyBehavior前提のパターンだった。Next 13+のLinkはpassHref無指定でも
// それ自身が<a>を描画するため、子に<a>(StyledLink_)を渡すと<a>の中に<a>が
// ネストしてしまい、ブラウザがそれを矯正した結果サーバー側の出力と食い違って
// 全ページでハイドレーションエラーになっていた(2026-11、Next 16移行時の見落とし)。
// Next.js純正のLinkにclassNameを直接渡す形に修正する。
// aria-current などの属性もそのまま <a> に渡す
export function StyledLink({ href, children, ...rest }: StyledLinkProps) {
  return (
    <StyledLink_ href={href} {...rest}>
      {children}
    </StyledLink_>
  )
}

const StyledLink_ = styled(Link)`
  text-decoration: none;
  cursor: pointer;
`
