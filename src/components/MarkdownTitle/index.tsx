import styled from '@emotion/styled'

interface Props {
  title: string
}

export default function MarkdownTitle({ title }: Props) {
  return <Title>{title}</Title>
}

const Title = styled.h1`
  font-family: 'novecentosans', sans-serif;
  font-size: 2.5em;
  line-height: 1.3em;
  text-align: center;

  &::after {
    content: '';
    display: block;
    width: 40px;
    border-bottom: solid 2px #5d639e;
    margin: 50px auto;
  }
`
