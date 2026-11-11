import styled from '@emotion/styled'
import { descriptionFromMarkdown, PageHead } from 'src/components/Head'
import MainLayout from 'src/components/MainLayout'
import MarkdownBody from 'src/components/MarkdownBody'
import { Container, Label } from 'src/components/ui/layout'
import { color, font, mq, size, space } from 'src/design/tokens'
import { StyledLink } from 'src/utils/next/elements'
import { urlArticleMdEdit } from 'src/utils/urls'

interface Props {
  title?: string
  date: string | null
  year: string
  slug: string
  body: string
}

const formatDate = (d: string) => d.replace(/^(\d{4})-(\d{2})-(\d{2}).*/, '$1.$2.$3')

export default function Article({ title, date, year, slug, body }: Props) {
  return (
    <>
      <PageHead title={title} description={descriptionFromMarkdown(body)} type="article" />
      <MainLayout>
        <Header>
          <Container narrow>
            <Crumb>
              <StyledLink href="/news">ニュース</StyledLink>
            </Crumb>
            <Label as="p">
              {date ? <time dateTime={date.slice(0, 10)}>{formatDate(date)}</time> : `${year}年度`}
            </Label>
            {title && <Title>{title}</Title>}
          </Container>
        </Header>
        <Container narrow>
          <Body>
            <MarkdownBody body={body} editRequestUrl={urlArticleMdEdit(year, slug)} />
          </Body>
        </Container>
      </MainLayout>
    </>
  )
}

const Header = styled.div`
  padding: ${space.xxl} 0 ${space.lg};
  border-bottom: solid 1px ${color.line};
  ${mq.sp} {
    padding: ${space.xl} 0 ${space.md};
  }
`

const Crumb = styled.p`
  margin: 0 0 ${space.md};
  font-size: ${size.sm};
  a {
    color: ${color.inkMuted};
    &::before {
      content: '← ';
    }
    &:hover {
      color: ${color.accent};
    }
  }
`

const Title = styled.h1`
  margin: 0;
  font-family: ${font.serif};
  font-weight: 600;
  font-size: ${size.xl};
  line-height: 1.5;
  letter-spacing: 0.05em;
`

const Body = styled.article`
  padding: ${space.lg} 0 0;
`
