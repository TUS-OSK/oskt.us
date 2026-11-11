import remark from 'remark'
import styled from '@emotion/styled'
import html from 'remark-html'
import sanitizeHtml from 'sanitize-html'
import { useEffect } from 'react'
import { css } from '@emotion/react'
import { BASE_PATH } from 'src/utils/basePath'
import { color, ease, font, radius, size, space } from 'src/design/tokens'

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

// PRプレビュー（/pr-preview/pr-<番号>/ 配下）ではbasePathが付くが、Next.js自身の
// basePath機構はnext/link・next/image等にしか効かず、Markdown中の生HTML（絶対パスの
// 画像src等）までは書き換えてくれない。そのため /uploads/... のような絶対パス画像が
// プレビューでだけ404になっていた。ここで明示的にbasePathを前置する。
// 本番（NEXT_PUBLIC_BASE_PATH未設定）では何もしない。
// (単純な1パス用なら src/utils/basePath.ts の withBasePath を使うこと。
// こちらはHTML文字列中の全src/href属性をまとめて書き換える専用版)
const withBasePathInHtml = (htmlStr: string): string =>
  BASE_PATH ? htmlStr.replace(/((?:src|href)=")\/(?!\/)/g, (_m, prefix) => `${prefix}${BASE_PATH}/`) : htmlStr

// remark-html は生HTMLをそのまま通す（XSS, GHSA-9q5w-79cv-947m）。remark-html自身の
// sanitizeオプションは生HTMLブロックを丸ごと削除してしまい、記事中で実際に使っている
// Twitter埋め込み（blockquote+class）やGoogle Slides埋め込み（iframe）が壊れるため使えない。
// そこで出力後のHTML文字列を sanitize-html で後処理し、<script>・on*属性・javascript:
// スキーム等の危険な要素だけを落とす。許可リストは _pages/_articles の既存markdownを
// 全文grepして実際に使われているタグ・属性・classから作成した（2026-11時点）。
//
// Twitter widgets.js は useTwitterWidgets() が動的に読み込むので、本文中の<script>を
// 許可する必要はない（デフォルトで非許可のまま）。
const SANITIZE_OPTIONS: sanitizeHtml.IOptions = {
  allowedTags: sanitizeHtml.defaults.allowedTags.concat(['img', 'iframe']),
  allowedAttributes: {
    ...sanitizeHtml.defaults.allowedAttributes,
    // class/lang/dir はTwitter埋め込み判定・fa-html5アイコン・lang-warning/lang-info
    // ボックス・Twitter埋め込みの言語指定で実際に使われているため全タグで許可する
    '*': ['class', 'lang', 'dir'],
    blockquote: ['cite', 'data-lang'],
    // iframeはGoogle Slides埋め込み専用（docs/articles内のmarkdown-guide.mdで案内している
    // 手順）。ホスト名を絞ることで、許可リストに無いsrcは自動的に落とされる
    iframe: ['src', 'width', 'height', 'frameborder', 'allow', 'allowfullscreen'],
  },
  allowedIframeHostnames: ['docs.google.com'],
  allowedSchemes: ['http', 'https', 'mailto'],
}

// ページの見出し(h1)は Markdown の外で出すので、本文中の「# 見出し」は h2 に下げる
// (古い記事に残っている h1 で、1ページに h1 が2つになるのを防ぐ)。
// コードブロックは横スクロールするので、キーボードでもスクロールできるよう tabindex を付ける
const adjustHtml = (htmlStr: string): string =>
  htmlStr
    .replace(/<h1(\s|>)/g, '<h2$1')
    .replace(/<\/h1>/g, '</h2>')
    .replace(/<pre>/g, '<pre tabindex="0">')

export default function MarkdownBody({ editRequestUrl, centered = false, body }: Props) {
  const unsafeHtml = remark().use(html).processSync(body).contents as string
  const __html = adjustHtml(withBasePathInHtml(sanitizeHtml(unsafeHtml, SANITIZE_OPTIONS)))
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
  margin-top: ${space.xl};
  padding-top: ${space.md};
  border-top: solid 1px ${color.line};
`

const ExternalLink = styled.a`
  color: ${color.inkSubtle};
  font-size: ${size.xs};
  &:hover {
    color: ${color.accent};
  }
`

// Markdown 本文の見た目。黒地の上で長文を読みやすくする(行間広め・見出しは明朝)
export const MarkdownBodyContainer = styled.div<{ centered: boolean }>`
  color: ${color.ink};
  line-height: 2;
  word-break: normal;
  overflow-wrap: anywhere;

  & > :first-child {
    margin-top: 0;
  }

  p {
    margin: 0 0 1.4em;
    ${(p) =>
      p.centered &&
      css`
        text-align: center;
      `}
  }

  strong {
    font-weight: bold;
    color: ${color.ink};
  }

  a {
    color: ${color.accent};
    text-decoration: underline;
    text-decoration-color: ${color.accentLine};
    text-underline-offset: 3px;
    &:hover {
      text-decoration-color: ${color.accent};
    }
  }

  /* 「?pretty」付きのリンクはボタンとして出す(Markdown ガイド参照) */
  a[href$='?pretty'] {
    display: inline-flex;
    align-items: center;
    gap: 8px;
    margin: 0.4em 0;
    padding: 9px 22px;
    font-size: ${size.sm};
    letter-spacing: 0.08em;
    color: ${color.ink};
    text-decoration: none;
    border: solid 1px ${color.lineStrong};
    border-radius: 2px;
    transition:
      color 0.2s ${ease},
      border-color 0.2s ${ease};
    &::after {
      content: '→';
    }
    &:hover {
      color: ${color.accent};
      border-color: ${color.accent};
    }
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    font-family: ${font.serif};
    font-weight: 600;
    letter-spacing: 0.05em;
    line-height: 1.5;
  }

  /* 本文中の h1(古い記事に残っている)は、ページの見出しと競合しないよう h2 と同じ大きさにする */
  h1,
  h2 {
    font-size: ${size.lg};
    margin: 2.6em 0 1em;
    padding-bottom: 0.6em;
    border-bottom: solid 1px ${color.line};
  }

  h3 {
    font-size: ${size.md};
    margin: 2em 0 0.6em;
    &::before {
      content: '';
      display: inline-block;
      width: 12px;
      height: 1px;
      margin-right: 10px;
      vertical-align: middle;
      background: ${color.accent};
    }
  }

  h4,
  h5,
  h6 {
    font-size: ${size.md};
    margin: 1.6em 0 0.4em;
    color: ${color.inkMuted};
  }

  ul,
  ol {
    margin: 0 0 1.4em;
    padding-left: 1.4em;
  }
  li {
    margin: 0.3em 0;
  }
  li::marker {
    color: ${color.inkSubtle};
  }

  blockquote {
    margin: 0 0 1.4em;
    padding: 0.2em 0 0.2em 1.2em;
    color: ${color.inkMuted};
    border-left: solid 2px ${color.lineStrong};
    p:last-child {
      margin-bottom: 0;
    }
  }

  code {
    font-family: ui-monospace, SFMono-Regular, Menlo, Consolas, monospace;
    font-size: 0.9em;
    padding: 0.1em 0.4em;
    background: ${color.surfaceRaised};
    border-radius: 3px;
  }
  pre {
    overflow-x: auto;
    padding: ${space.sm};
    background: ${color.surface};
    border: solid 1px ${color.line};
    border-radius: ${radius};
    line-height: 1.6;
    code {
      padding: 0;
      background: none;
    }
  }

  table {
    display: block;
    overflow-x: auto;
    border-collapse: collapse;
    margin: 0 0 1.4em;
    font-size: ${size.sm};
  }
  th,
  td {
    padding: 8px 14px;
    border: solid 1px ${color.line};
    text-align: left;
  }
  th {
    background: ${color.surface};
  }

  hr {
    border: none;
    border-top: solid 1px ${color.line};
    margin: 2.4em 0;
  }

  img {
    max-width: 100%;
    height: auto;
    border-radius: ${radius};
  }

  iframe {
    max-width: 100%;
    border: none;
  }

  .lang-warning,
  .lang-info {
    display: block;
    font-family: inherit;
    padding: 1em 1.4em;
    border-left: solid 2px ${color.accent};
    background-color: ${color.accentSoft};
  }
  .lang-warning {
    border-left-color: ${color.ink};
    background-color: rgba(255, 255, 255, 0.06);
  }
`
