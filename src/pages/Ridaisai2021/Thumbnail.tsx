import Link from 'next/link'
import styled from '@emotion/styled'
import { MEDIA_QUERY_MOBILE } from './breakpoint/helper'
import { css } from '@emotion/react'

interface Props {
  title: string
  description: string
  src: string
  url: string
}

export default function Thumbnail({ title, description, src, url }: Props) {
  return (
    <Container>
      <Image src={src}></Image>
      <Info>
        {url ? (
          <Link href={url} passHref>
            <ExternalLinkTitle target="_blank" rel="noopener">
              {title}
            </ExternalLinkTitle>
          </Link>
        ) : (
          <Title>{title}</Title>
        )}
        <Description>{description}</Description>
      </Info>
    </Container>
  )
}

const Container = styled.div`
  display: flex;
  flex-flow: column;
`

const Image = styled.img`
  max-width: 400px;
  object-fit: cover;

  height: 260px;
  ${MEDIA_QUERY_MOBILE} {
    height: 220px;
  }
`

const titleCss = css`
  font-weight: bold;

  font-size: 20px;
  ${MEDIA_QUERY_MOBILE} {
    font-size: 16px;
  }
`

const Title = styled.div`
  ${titleCss}
`

const ExternalLinkTitle = styled.a`
  ${titleCss}
`

const Description = styled.div`
  font-size: 16px;
  ${MEDIA_QUERY_MOBILE} {
    font-size: 14px;
  }
`

const Info = styled.div`
  margin-top: 16px;
  ${MEDIA_QUERY_MOBILE} {
    margin-top: 8px;
  }
`
