declare module 'structured-clone' {
  // なんか動いた
  export default structuredClone
}

// @types/sanitize-html は新しいTS構文で書かれており、このプロジェクトのTypeScript 4.3の
// パーサーが構文解析自体に失敗する（型チェックの問題ではないので skipLibCheck でも回避できない）。
// 実際に使っている範囲だけをここで自前定義する。
declare module 'sanitize-html' {
  function sanitizeHtml(dirty: string, options?: sanitizeHtml.IOptions): string

  namespace sanitizeHtml {
    interface IOptions {
      allowedTags?: string[]
      allowedAttributes?: Record<string, string[]>
      allowedIframeHostnames?: string[]
      allowedSchemes?: string[]
    }

    const defaults: {
      allowedTags: string[]
      allowedAttributes: Record<string, string[]>
    }
  }

  export default sanitizeHtml
}
