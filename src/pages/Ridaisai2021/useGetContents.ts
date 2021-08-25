import { useCallback, useRef, useState } from 'react'
import { useApiUrl } from 'src/utils/env'

interface Content {
  id: 1 | 2 | 3
  like_count: number
}

export function checkContentType(content: Content) {
  return content.id === 1 ? 'ray' : content.id === 2 ? 'dl' : content.id === 3 ? 'web' : null
}

type ContentType = Exclude<ReturnType<typeof checkContentType>, null>

type ContentData = {
  [type in ContentType]?: {
    likeCount: number
  }
}

export default function useGetContents() {
  const [busy, setBusy] = useState(false)
  const contentData = useRef<ContentData | null>(null)

  const importContents = useCallback(async () => {
    const url = useApiUrl()
    if (!url) {
      return
    }

    try {
      setBusy(true)
      const result = await fetch(url, {
        method: 'GET',
        headers: {
          'Content-Type': 'text/plain',
        },
      })
      const contents = JSON.parse(await result.text()) as Content[]

      contentData.current = Object.fromEntries(
        contents
          .filter((content) => checkContentType(content) !== null)
          .map<[ContentType, ContentData[ContentType]]>((content) => [
            checkContentType(content)!,
            { likeCount: content.like_count },
          ])
      )
    } catch {
      // FIXME: エラーしたときの対応を考える
    } finally {
      setBusy(false)
    }
  }, [])

  return [contentData.current, busy, importContents] as const
}
