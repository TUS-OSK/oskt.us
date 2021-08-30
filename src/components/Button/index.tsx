import { StyledLink } from 'src/utils/next/elements'
import styled from '@emotion/styled'
import { css } from '@emotion/react'
import { MouseEventHandler } from 'react'

type Props = {
  children: string
  // FIXME: カラーテーマを作ってもっと安全にする
  color: {
    primary: string
    secondary: string
  }
  className?: string
} & (
  | {
      mode: 'button'
      onClick?: MouseEventHandler<HTMLButtonElement>
    }
  | {
      mode?: 'link'
      href: string
    }
)

export default function Button(props: Props) {
  return props.mode === 'button' ? (
    <ButtonContainer
      primary={props.color.primary}
      secondry={props.color.secondary}
      onClick={props.onClick}
      className={props.className}
      type="button"
    >
      {props.children}
    </ButtonContainer>
  ) : (
    // NOTE: デフォルトはリンクになる
    <LinkContainer
      primary={props.color.primary}
      secondry={props.color.secondary}
      href={props.href}
      className={props.className}
    >
      {props.children}
    </LinkContainer>
  )
}

export const baseCss = css`
  display: inline-flex;
  align-items: center;
  padding: 5px 20px;

  font-size: 13px;
  font-family: 'novecentosans', sans-serif;
  font-weight: bold;
  line-height: 22px;

  transition-property: background-color, color, opacity;
  transition-duration: 0.2s;
  transition-timing-function: ease;

  cursor: pointer;
  user-select: none;

  :active {
    opacity: 0.7;
  }
`

export const colorCss = (primary: string, secondary: string) => css`
  background-color: ${secondary};
  color: ${primary};
  border: 1px solid ${primary};

  :hover {
    background-color: ${primary};
    color: ${secondary};
  }
`

type ColorProps = { primary: string; secondry: string }

const LinkContainer = styled(StyledLink)<ColorProps>`
  ${baseCss}
  ${(p) => colorCss(p.primary, p.secondry)}
  text-decoration: none;
`

const ButtonContainer = styled.button<ColorProps>`
  ${baseCss}
  ${(p) => colorCss(p.primary, p.secondry)}
`
