import styled from '@emotion/styled'
import { PageHead } from 'src/components/Head'
import MainLayout from 'src/components/MainLayout'
import MarkdownBody from 'src/components/MarkdownBody'
import { PageHeader, Section } from 'src/components/ui/layout'
import LinkButton, { ButtonRow } from 'src/components/ui/LinkButton'
import { color, ease, font, size, space } from 'src/design/tokens'
import { urlPageMdEdit } from 'src/utils/urls'

interface Props {
  title?: string
  body: string
}

interface QA {
  q: string
  a: string
}

/**
 * faq.md の「## よくある質問」以下を、質問と回答の組に分ける。
 * 書式は「- 質問」の行と、それに続く「> 回答」の行(複数行可)。
 * 分けられなかった部分はそのまま本文として出す
 */
function splitFaq(body: string): { intro: string; items: QA[] } {
  const marker = body.search(/^##\s*よくある質問\s*$/m)
  if (marker < 0) return { intro: body, items: [] }
  const intro = body.slice(0, marker)
  const items: QA[] = []
  for (const line of body.slice(marker).split('\n').slice(1)) {
    const q = line.match(/^-\s+(.*)$/)
    if (q) {
      items.push({ q: q[1].trim(), a: '' })
      continue
    }
    const a = line.match(/^>\s?(.*)$/)
    if (a && items.length) {
      items[items.length - 1].a += `${a[1]}\n`
    } else if (line.trim() && items.length) {
      // 「>」の無い継続行(前の回答の続き)
      items[items.length - 1].a += `${line}\n`
    }
  }
  return { intro, items }
}

export default function FAQ({ title = 'よくある質問', body }: Props) {
  const { intro, items } = splitFaq(body)
  return (
    <>
      <PageHead
        title="よくある質問"
        description="東京理科大学 応用数学研究部(OSK)のよくある質問。未経験でも大丈夫か、活動日・場所、部費、他学部・経営学部からの入部、データサイエンスや統計・AIを学べるかなど。"
      />
      <MainLayout>
        <PageHeader label="FAQ" title={title === 'FAQ' ? 'よくある質問' : title} narrow />
        <Section narrow>
          <List>
            {items.map((item) => (
              <Item key={item.q}>
                <summary>
                  <Q aria-hidden="true">Q</Q>
                  <span>{item.q}</span>
                </summary>
                <Answer>
                  <MarkdownBody body={item.a} />
                </Answer>
              </Item>
            ))}
          </List>
          <Note>
            <MarkdownBody body={intro} editRequestUrl={urlPageMdEdit('faq')} />
          </Note>
          <ButtonRow>
            <LinkButton href="/pay">入部・見学</LinkButton>
            <LinkButton href="/contact" variant="secondary">
              ご連絡
            </LinkButton>
          </ButtonRow>
        </Section>
      </MainLayout>
    </>
  )
}

const List = styled.div`
  border-top: solid 1px ${color.line};
`

// details/summary で開閉する。JS が無くても動き、ページ内検索にも引っかかる
const Item = styled.details`
  border-bottom: solid 1px ${color.line};

  summary {
    display: flex;
    gap: ${space.sm};
    align-items: baseline;
    padding: ${space.md} 2.4em ${space.md} 0;
    cursor: pointer;
    list-style: none;
    position: relative;
    font-family: ${font.serif};
    font-weight: 600;
    font-size: ${size.md};
    line-height: 1.8;
    transition: color 0.2s ${ease};

    &::-webkit-details-marker {
      display: none;
    }
    &::after {
      content: '';
      position: absolute;
      right: 6px;
      top: calc(${space.md} + 0.6em);
      width: 8px;
      height: 8px;
      border-right: solid 1px ${color.inkMuted};
      border-bottom: solid 1px ${color.inkMuted};
      transform: rotate(45deg);
      transition: transform 0.25s ${ease};
    }
    &:hover {
      color: ${color.accent};
    }
  }
  &[open] summary::after {
    transform: rotate(-135deg);
  }
`

const Q = styled.span`
  font-family: ${font.label};
  color: ${color.accent};
`

const Answer = styled.div`
  padding: 0 0 ${space.md} calc(${space.sm} + 1em);
  color: ${color.inkMuted};
  p {
    margin-bottom: 0.6em;
  }
`

const Note = styled.div`
  margin: ${space.lg} 0;
  font-size: ${size.sm};
  color: ${color.inkMuted};
`
