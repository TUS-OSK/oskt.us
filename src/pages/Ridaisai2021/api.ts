import { useApiUrl } from 'src/utils/env'

type ContentId = 1 | 2 | 3

export interface Content {
  id: ContentId
  like_count: number
}

export type ContentData = {
  [type in ContentType]?: {
    likeCount: number
  }
}

const CONTENT_TYPE = {
  1: 'ray',
  2: 'dl',
  3: 'web',
} as const

export type ContentType = typeof CONTENT_TYPE[keyof typeof CONTENT_TYPE]

export function checkContentType(content: Content) {
  return CONTENT_TYPE[content.id]
}

export function convertContentTypeToContentId(targetType: ContentType) {
  const idKey = Object.entries(CONTENT_TYPE).find(([, type]) => type === targetType)![0]
  return parseInt(idKey, 10) as ContentId
}

const URL = useApiUrl()

export async function getContents() {
  if (!URL) {
    return null
  }

  const result = await fetch(URL, {
    method: 'GET',
    headers: {
      'Content-Type': 'text/plain',
    },
  })
  const contents = JSON.parse(await result.text()) as Content[]
  return contents
}

export async function postLikeCount(contentId: ContentId, likeCount: number) {
  if (!URL) {
    return
  }

  await fetch(URL, {
    method: 'POST',
    mode: 'no-cors',
    headers: {
      'Content-Type': 'text/plain',
    },
    body: JSON.stringify({ id: contentId, like_count: likeCount }),
  })
}
