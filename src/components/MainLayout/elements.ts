import styled from 'styled-components'

const SECTION_PADDING_Y = 70
const SECTION_PADDING_X = 150

const SECTION_PADDING_Y_SMALL = 40
const SECTION_PADDING_X_SMALL = 20

export const Section = styled.div`
  padding: ${SECTION_PADDING_Y}px ${SECTION_PADDING_X}px;

  @media (max-width: 700px) {
    padding: ${SECTION_PADDING_Y_SMALL}px ${SECTION_PADDING_X_SMALL}px;
  }
`

export const FixedSizeContents = styled.div<{ size: number }>`
  margin: auto;
  max-width: ${(p) => p.size}px;
`
