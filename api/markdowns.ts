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
  meta: MarkdownMeta<T>
  body: string
}

const PAGES_DIR_URL = join(process.cwd(), '_pages')

export const createPagePath = (slug: string) => join('/', slug)

/**
 * slug名からmarkdownファイルのデータを取得する
 *
 * @param slug `[slug].md`
 *
 * @returns slug: 現在のページのSlug名
 * @returns meta: YAML形式で書かれたメタデータ
 * @returns body: 本文の文字列
 */
export function getPageMarkdown<T = {}>(slug: string): MarkdownData<T> {
  const url = join(PAGES_DIR_URL, `${slug}.md`)
  const file = readFileSync(url, 'utf8')
  const { data, content } = matter(file)
  return {
    meta: data as MarkdownMeta<T>,
    body: content,
  }
}

const ARTICLES_DIR_PATH = join(process.cwd(), '_articles')

export const createArticlePath = (year: string, slug: string) => join('/', year, slug)

export const convertMarkdownFileNameToSlug = (fileName: string) => fileName.replace(/\.md$/, '')
export const convertSlugToMarkdownFileName = (slug: string) => `${slug}.md`

export function getArticleFileByYearAndFileName(year: string, fileName: string) {
  const path = join(ARTICLES_DIR_PATH, year, fileName)
  return readFileSync(path, 'utf8')
}

export interface ArticleMarkdownData<T = {}> extends MarkdownData<T> {
  year: string
  slug: string
}

export function getArticleByYearAndFileName(year: string, fileName: string): ArticleMarkdownData<MarkdownBaseMeta> {
  const file = getArticleFileByYearAndFileName(year, fileName)
  const { data, content } = matter(file)
  const slug = convertMarkdownFileNameToSlug(fileName)
  return {
    year,
    slug,
    meta: data,
    body: content,
  }
}

export function getArticleFileNamesByYear(year: string) {
  const path = join(ARTICLES_DIR_PATH, year)
  return readdirSync(path, 'utf8')
}

export function getArticlesByYear(year: string) {
  const fileNames = getArticleFileNamesByYear(year)
  return fileNames.map((fileName) => getArticleByYearAndFileName(year, fileName))
}

export function getArticleYearDirNames() {
  return readdirSync(ARTICLES_DIR_PATH, 'utf8')
}

export function getArticlesAll() {
  const yearDirNames = getArticleYearDirNames()
  return yearDirNames.reduce(
    (prev: MarkdownData<MarkdownBaseMeta>[], year) => [...prev, ...getArticlesByYear(year)],
    []
  )
}
