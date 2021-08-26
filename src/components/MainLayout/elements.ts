import styled from '@emotion/styled'

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

export const SectionTitle = styled.div`
  color: #333;
  font-family: 'novecentosans';
  font-weight: bold;
  text-align: center;
  font-size: 25px;
  margin-bottom: 40px;

  @media (max-width: 700px) {
    margin-bottom: 24px;
  }
`

export const FixedSizeContents = styled.div<{ size: number }>`
  margin: auto;
  max-width: ${(p) => p.size}px;
`
