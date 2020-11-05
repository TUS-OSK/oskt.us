import { readdirSync, readFileSync } from 'fs'
import matter from 'gray-matter'
import { join } from 'path'

/**
 * slug名からmarkdownファイルのデータを取得する
 *
 * @param slug `[slug].md`
 * @returns meta: YAML形式で書かれたメタデータ
 * @returns body: 本文の文字列
 */

export interface MarkdownBaseMeta {
  date?: string
  caption?: string
  private?: boolean
}

export interface MarkdownData<T extends MarkdownBaseMeta> {
  path: string
  meta: T
  body: string
}

const PAGES_DIR_URL = join(process.cwd(), '_pages')

export function getPageMarkdown<T>(slug: string): MarkdownData<T> {
  const url = join(PAGES_DIR_URL, `${slug}.md`)
  const file = readFileSync(url, 'utf8')
  const { data, content } = matter(file)
  return {
    path: join('/', slug),
    meta: data as T,
    body: content,
  }
}

const POSTS_DIR_URL = join(process.cwd(), '_posts')

export function getPostByYearAndFileName(year: string, fileName: string): MarkdownData<MarkdownBaseMeta> {
  const url = join(POSTS_DIR_URL, year, fileName)
  const file = readFileSync(url, 'utf8')
  const { data, content } = matter(file)
  const slug = fileName.replace(/\.md$/, '')
  return {
    path: join('/', year, slug),
    meta: data,
    body: content,
  }
}

export function getPostsByYear(year: string) {
  const path = join(POSTS_DIR_URL, year)
  const fileNames = readdirSync(path, 'utf8')
  return fileNames.map((fileName) => getPostByYearAndFileName(year, fileName))
}

export function getPostsAll() {
  const yearDirs = readdirSync(POSTS_DIR_URL, 'utf8')
  return yearDirs.reduce((prev: MarkdownData<MarkdownBaseMeta>[], yearDir) => [...prev, ...getPostsByYear(yearDir)], [])
}
