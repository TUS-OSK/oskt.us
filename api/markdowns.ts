import { readdirSync, readFileSync } from 'fs'
import matter from 'gray-matter'
import { join } from 'path'

export interface MarkdownBaseMeta {
  title?: string
  date?: string
  caption?: string
  private?: boolean
}

export type MarkdownMeta<T = {}> = T & MarkdownBaseMeta

export interface MarkdownData<T = {}> {
  path: string
  meta: MarkdownMeta<T>
  body: string
}

const PAGES_DIR_URL = join(process.cwd(), '_pages')

/**
 * slug名からmarkdownファイルのデータを取得する
 *
 * @param slug `[slug].md`
 *
 * @returns path: 現在のページPath
 * @returns meta: YAML形式で書かれたメタデータ
 * @returns body: 本文の文字列
 */
export function getPageMarkdown<T = {}>(slug: string): MarkdownData<T> {
  const url = join(PAGES_DIR_URL, `${slug}.md`)
  const file = readFileSync(url, 'utf8')
  const { data, content } = matter(file)
  return {
    path: join('/', slug),
    meta: data as MarkdownMeta<T>,
    body: content,
  }
}

const ARTICLES_DIR_PATH = join(process.cwd(), '_articles')

export function getArticleByYearAndFileName(year: string, fileName: string): MarkdownData<MarkdownBaseMeta> {
  const url = join(ARTICLES_DIR_PATH, year, fileName)
  const file = readFileSync(url, 'utf8')
  const { data, content } = matter(file)
  const slug = fileName.replace(/\.md$/, '')
  return {
    path: join('/', year, slug),
    meta: data,
    body: content,
  }
}

export function getArticlesByYear(year: string) {
  const path = join(ARTICLES_DIR_PATH, year)
  const fileNames = readdirSync(path, 'utf8')
  return fileNames.map((fileName) => getArticleByYearAndFileName(year, fileName))
}

export function getArticlesAll() {
  const yearDirs = readdirSync(ARTICLES_DIR_PATH, 'utf8')
  return yearDirs.reduce(
    (prev: MarkdownData<MarkdownBaseMeta>[], yearDir) => [...prev, ...getArticlesByYear(yearDir)],
    []
  )
}
