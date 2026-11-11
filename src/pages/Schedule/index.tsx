import type { FlowItem } from 'api/club'
import { PageHead } from 'src/components/Head'
import MainLayout from 'src/components/MainLayout'
import MarkdownBody from 'src/components/MarkdownBody'
import { YearFlow } from 'src/components/ui/blocks'
import { PageHeader, Section } from 'src/components/ui/layout'
import { urlPageMdEdit } from 'src/utils/urls'

interface Props {
  title?: string
  body: string
  flow: FlowItem[]
}

export default function Schedule({ title = '年間スケジュール', body, flow }: Props) {
  return (
    <>
      <PageHead
        title={title}
        description="東京理科大学 応用数学研究部(OSK)の1年の流れ。4月の新歓、未経験者向けの新入生講義、ICPC国内予選、理大祭など。"
      />
      <MainLayout>
        <PageHeader label="Schedule" title={title} narrow />
        <Section id="flow" label="Every year" title="1年の流れ" narrow>
          <YearFlow items={flow} />
        </Section>
        <Section id="history" label="History" title="これまでの活動" narrow>
          <MarkdownBody body={body} editRequestUrl={urlPageMdEdit('schedule')} />
        </Section>
      </MainLayout>
    </>
  )
}
