import styled from '@emotion/styled'
import { PageHead } from 'src/components/Head'
import Ridaisai2021 from 'src/pages/Ridaisai2021'
import BreakPointProvider from 'src/pages/Ridaisai2021/breakpoint/Provider'

export default function Ridaisai2021Page() {
  return (
    <BreakPointProvider>
      <PageHead
        title="理大祭2021"
        description="応用数学研究部(OSK)の理大祭2021オンライン展示。部員の作品を公開しています。"
      />
      <VisuallyHiddenTitle>理大祭2021 特設ページ</VisuallyHiddenTitle>
      <Ridaisai2021 />
    </BreakPointProvider>
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
