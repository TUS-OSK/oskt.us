import { useCallback, useRef, useState } from 'react'
import { ContentType, convertContentTypeToContentId, postLikeCount } from './api'

export default function usePostLikeCount(type: ContentType) {
  const [busy, setBusy] = useState(false)
  const alreadySendLikeCountCache = useRef(0)

  const sendLikeCount = useCallback(async (likeCount: number) => {
    try {
      setBusy(true)
      await postLikeCount(convertContentTypeToContentId(type), likeCount)
      alreadySendLikeCountCache.current += likeCount
    } catch {
      // FIXME: エラーしたときの対応を考える
    } finally {
      setBusy(false)
    }
  }, [])

  return [alreadySendLikeCountCache.current, busy, sendLikeCount] as const
}
