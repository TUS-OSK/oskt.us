import styled from '@emotion/styled'
import { ReactNode } from 'react'
import { color, ease, size } from 'src/design/tokens'
import { StyledLink } from 'src/utils/next/elements'

interface Props {
  href: string
  children: ReactNode
  /** primary: 白地(主な行動) / secondary: 線(脇の行動) / text: 矢印付きの文字リンク */
  variant?: 'primary' | 'secondary' | 'text'
  external?: boolean
}

// トップのヒーローの「部の様子」「ご連絡」と同じ見た目のボタン
export default function LinkButton({ href, children, variant = 'primary', external = false }: Props) {
  // StyledLink は data-* 属性を下に渡さないので、見た目の違いは class で付ける
  if (external) {
    return (
      <Anchor href={href} className={variant} target="_blank" rel="noopener">
        {children}
      </Anchor>
    )
  }
  return (
    <Internal href={href} className={variant}>
      {children}
    </Internal>
  )
}

const styles = `
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 11px 28px;
  font-size: ${size.sm};
  letter-spacing: 0.1em;
  line-height: 1.4;
  text-decoration: none;
  border: solid 1px transparent;
  border-radius: 2px;
  transition: background-color 0.2s ${ease}, color 0.2s ${ease}, border-color 0.2s ${ease};

  &.primary {
    color: ${color.base};
    background: ${color.ink};
    &:hover { background: ${color.accent}; }
  }
  &.secondary {
    color: ${color.ink};
    border-color: ${color.lineStrong};
    &:hover { color: ${color.accent}; border-color: ${color.accent}; }
  }
  &.text {
    padding: 4px 0;
    color: ${color.accent};
    &::after { content: '→'; transition: transform 0.2s ${ease}; }
    &:hover::after { transform: translateX(4px); }
  }
`

const Internal = styled(StyledLink)`
  ${styles}
`
const Anchor = styled.a`
  ${styles}
`

export const ButtonRow = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
  align-items: center;
`
