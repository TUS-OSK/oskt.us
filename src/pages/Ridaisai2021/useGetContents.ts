import { useCallback, useRef, useState } from 'react'
import { checkContentType, ContentData, ContentType, getContents } from './api'

export default function useGetContents() {
  const [busy, setBusy] = useState(false)
  const contentData = useRef<ContentData | null>(null)

  const importContents = useCallback(async () => {
    try {
      setBusy(true)

      const contents = await getContents()
      if (!contents) {
        return
      }

      contentData.current = Object.fromEntries(
        contents
          .filter((content) => checkContentType(content) !== null)
          .map<[ContentType, ContentData[ContentType]]>((content) => [
            checkContentType(content),
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
