import Link from 'next/link'
import styled, { css } from 'styled-components'

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
  display: grid;
  gap: 8px;
`

const Image = styled.img`
  width: 400px;
  height: 260px;
  object-fit: cover;
`

const titleCss = css`
  font-size: 20px;
  font-weight: bold;
`

const Title = styled.div`
  ${titleCss}
`

const ExternalLinkTitle = styled.a`
  ${titleCss}
`

const Description = styled.div``

const Info = styled.div``
