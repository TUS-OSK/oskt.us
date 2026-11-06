import { Section } from 'src/components/MainLayout/elements'
import styled from '@emotion/styled'

// サイトの著作権表記の開始年。毎年ここを手で書き換える運用だったが2023年で
// 止まっていたため、現在年との差分を自動表示するようにした（2022-04-10, 2023-11-24 の
// 「著作権表記を2023年に」的なコミットがこれ以降不要になる）。
const COPYRIGHT_START_YEAR = 2023

export default function Footer() {
  const currentYear = new Date().getFullYear()
  const yearLabel =
    currentYear > COPYRIGHT_START_YEAR
      ? `${COPYRIGHT_START_YEAR}-${currentYear}`
      : `${COPYRIGHT_START_YEAR}`

  return (
    <Container as="footer">
      <small>Copyright (c) {yearLabel} OSK</small>
    </Container>
  )
}

const Container = styled(Section)`
  display: flex;
  justify-content: center;
  background-color: #333;
  color: #bbb;
`
