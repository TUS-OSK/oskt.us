import { StyledLink as StyledLink_ } from 'src/utils/next/elements'
import styled from 'styled-components'
import baloon from '_configs/baloon.json'

const { label: BALOON_LABEL, path: BALOON_PATH } = baloon

export const BALOON_HEIGHT = 40
const BALOON_TEXT_HEIGHT = 16
export const BALOON_MAX_WIDTH = 240

export default function Baloon() {
  return (
    <StyledLink href={BALOON_PATH}>
      <Icon
        aria-hidden="true"
        focusable="false"
        data-prefix="fas"
        data-icon="exclamation-circle"
        className="svg-inline--fa fa-exclamation-circle fa-w-16"
        role="img"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 512 512"
        width={BALOON_TEXT_HEIGHT}
        height={BALOON_TEXT_HEIGHT}
      >
        <path
          fill="currentColor"
          d="M504 256c0 136.997-111.043 248-248 248S8 392.997 8 256C8 119.083 119.043 8 256 8s248 111.083 248 248zm-248 50c-25.405 0-46 20.595-46 46s20.595 46 46 46 46-20.595 46-46-20.595-46-46-46zm-43.673-165.346l7.418 136c.347 6.364 5.609 11.346 11.982 11.346h48.546c6.373 0 11.635-4.982 11.982-11.346l7.418-136c.375-6.874-5.098-12.654-11.982-12.654h-63.383c-6.884 0-12.356 5.78-11.981 12.654z"
        ></path>
      </Icon>
      <Label>{BALOON_LABEL}</Label>
    </StyledLink>
  )
}

const Icon = styled.svg`
  flex: none;
`

const Label = styled.span`
  margin-left: 4px;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  font-size: 14px;
  line-height: ${BALOON_TEXT_HEIGHT}px;
`

const StyledLink = styled(StyledLink_)`
  display: inline-flex;
  align-items: center;
  vertical-align: top;
  border-radius: 4px;
  background-color: #da6272;
  color: #fff;
  height: ${BALOON_HEIGHT}px;
  max-width: 200px;
  padding: 0 16px;
`
