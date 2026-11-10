import styled from '@emotion/styled'
import { PageHead } from 'src/components/Head'
import Ridaisai2023 from 'src/pages/Ridaisai2023'

export default function Ridaisai2023Page() {
  return (
    <>
      <PageHead title="理大祭2023" description="応用数学研究部(OSK)の理大祭2023展示。部員の作品を公開しています。" />
      <VisuallyHiddenTitle>理大祭2023 特設ページ</VisuallyHiddenTitle>
      <Ridaisai2023 />
    </>
  )
}

// 見た目上のタイトルは画像・ロゴで表現されているため、見出し構造用のh1は視覚的に隠す
const VisuallyHiddenTitle = styled.h1`
  position: absolute;
  width: 1px;
  height: 1px;
  overflow: hidden;
  clip: rect(0 0 0 0);
  white-space: nowrap;
`
