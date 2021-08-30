import styled from '@emotion/styled'
import { MouseEventHandler } from 'react'
import { baseCss, colorCss } from '../Button'

type Props = {
  children: string
  // FIXME: カラーテーマを作ってもっと安全にする
  color: {
    primary: string
    secondary: string
  }
  className?: string
  onClick?: MouseEventHandler<HTMLButtonElement>
}

export default function FormrunSubmitButton(props: Props) {
  return (
    <ButtonContainer
      type="submit"
      data-formrun-error-text="未入力の項目があります"
      data-formrun-submitting-text="送信完了"
      primary={props.color.primary}
      secondry={props.color.secondary}
      onClick={props.onClick}
      className={props.className}
    >
      {props.children}
    </ButtonContainer>
  )
}

type ColorProps = { primary: string; secondry: string }

const ButtonContainer = styled.button<ColorProps>`
  ${baseCss}
  ${(p) => colorCss(p.primary, p.secondry)}
`
