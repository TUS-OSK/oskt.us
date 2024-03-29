import remark from 'remark'
import styled from '@emotion/styled'
import html from 'remark-html'
import { useEffect } from 'react'
import { css } from '@emotion/react'

interface Props {
  editRequestUrl?: string
  body: string
  centered?: boolean
}

interface TwitterWidgets {
  load: () => void
}

function useTwitterWidgets() {
  const id = 'twitter-wjs'

  // FIXME: グローバル汚染してるので　Twitter の JS API の widgets-js を使わない方法を模索したい
  // https://developer.twitter.com/en/docs/twitter-for-websites/javascript-api/guides/set-up-twitter-for-websites
  useEffect(() => {
    // widgets-jsが読み込まれるとwindow.twttrができる
    const twttr = (window as any).twttr as any
    // もしwidgets-jsが読み込まれてたらそのままウィジェットを生成する
    if (twttr) {
      const twitterWidgets = twttr.widgets as TwitterWidgets
      return twitterWidgets.load()
    }

    // widgets-jsが読み込まれてなかったらheadへscriptを投げる
    const js = document.createElement('script') as HTMLScriptElement
    js.id = id
    js.src = 'https://platform.twitter.com/widgets.js'
    js.async = true
    document.head.appendChild(js)
  }, [])
}

export default function MarkdownBody({ editRequestUrl, centered = false, body }: Props) {
  const __html = remark().use(html).processSync(body).contents
  useTwitterWidgets()

  return (
    <>
      <MarkdownBodyContainer
        centered={centered}
        dangerouslySetInnerHTML={{ __html: __html as string }}
      ></MarkdownBodyContainer>
      {editRequestUrl && (
        <EditRequestContainer>
          <ExternalLink target="_blank" rel="noopener" href={editRequestUrl}>
            このページの編集をリクエストする
          </ExternalLink>
        </EditRequestContainer>
      )}
    </>
  )
}

const EditRequestContainer = styled.div`
  padding: 40px 0;
`

const ExternalLink = styled.a`
  color: #bbb;
  font-size: 14px;
`

export const MarkdownBodyContainer = styled.div<{ centered: boolean }>`
  line-height: 1.8em;

  &::before {
    content: '';
    display: table;
  }

  &::after {
    content: '';
    display: table;
  }

  strong {
    font-weight: bold;
    font-family: 'novecentosans', sans-serif;
  }

  a {
    color: inherit;
    text-decoration: underline;
  }

  a[href$='?pretty'] {
    border: solid 1px #da6272;
    display: inline-flex;
    align-items: center;
    padding: 5px 20px;
    text-decoration: none;
    color: #da6272;
    font-weight: bold;
    transition-property: background-color, color, opacity;
    transition-duration: 0.2s;
    transition-timing-function: ease;
    font-size: 0.8em;

    &::before {
      content: '';
      display: inline-flex;
      width: 5px;
      height: 5px;
      border-top: 2px solid #da6272;
      border-right: 2px solid #da6272;
      transform: translateX(-6px) rotate(45deg);
      transition-property: border-top, border-right;
      transition-duration: 0.2s;
      transition-timing-function: ease;
    }

    &:hover {
      background-color: #da6272;
      color: #fff;
      &::before {
        border-top: 2px solid #fff;
        border-right: 2px solid #fff;
      }
    }

    &:active {
      opacity: 0.7;
    }
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    font-family: 'novecentosans', sans-serif;
  }

  h1 {
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
  }

  h2 {
    position: relative;
    font-size: 1.6em;
    margin-bottom: 1.4em;
    margin-top: 1.2em;

    &::after {
      content: '';
      display: block;
      height: 0.1em;
      width: 100%;
      position: absolute;
      bottom: -0.5em;
      background-image: linear-gradient(
        -45deg,
        #fff 25%,
        #5d649e 25%,
        #5d649e 50%,
        #fff 50%,
        #fff 75%,
        #5d649e 75%,
        #5d649e
      );
      background-size: 8px 8px;
    }
  }

  h3 {
    font-size: 1.3em;
    margin-bottom: 0.6em;
    margin-top: 1em;
  }

  blockquote {
    color: #6a737d;
    border-left: 0.25em solid #dfe2e5;
    padding-left: 1em;
    margin-left: 0;
    word-wrap: break-word;
  }

  img {
    width: 300px;
    max-width: 100%;
  }

  p {
    margin-top: 0;
    ${(p) =>
      p.centered &&
      css`
        text-align: center;
      `}
  }

  .lang-warning {
    display: block;
    font-family: inherit;
    padding: 1em 1.5em;
    color: #da6272;
    border-left: 0.25em solid #da6272;
    background-color: color(#da6272 alpha(10%));
    word-wrap: break-word;
  }

  .lang-info {
    display: block;
    font-family: inherit;
    padding: 1em 1.5em;
    color: #5d639e;
    border-left: 0.25em solid #5d639e;
    background-color: color(#5d639e alpha(10%));
    word-wrap: break-word;
  }
`
