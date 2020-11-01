import { readFileSync } from 'fs'
import matter from 'gray-matter'
import { join } from 'path'

/**
 * slug名からmarkdownファイルのデータを取得する
 *
 * @param slug `[slug].md`
 * @returns meta: YAML形式で書かれたメタデータ
 * @returns body: 本文の文字列
 */

interface MarkdownBaseMeta {
  date?: string
}

export function getPageMarkdown<T extends MarkdownBaseMeta>(slug: string) {
  const dir = join(process.cwd(), '_pages')
  const path = join(dir, `${slug}.md`)
  const file = readFileSync(path, 'utf8')
  const { data, content } = matter(file)
  return {
    head: data as T,
    body: content,
  }
}
