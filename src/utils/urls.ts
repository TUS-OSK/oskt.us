const externalUrlOrigin = {
  twitter: 'https://twitter.com',
  github: 'https://github.com',
}

const join = (...paths: string[]) => paths.join('/')

type ExternalUrlType = keyof typeof externalUrlOrigin

export const externalTo = (type: ExternalUrlType, path: string) => join(externalUrlOrigin[type], path)

const REPOSITORY_PATH = 'TUS-OSK/oskt.us'

export const urlPageMdEdit = (slug: string) =>
  externalTo('github', join(REPOSITORY_PATH, 'edit', 'master', '_pages', 'markdowns', `${slug}.md`))

export const urlArticleMdEdit = (year: string, slug: string) =>
  externalTo('github', join(REPOSITORY_PATH, 'edit', 'master', '_articles', 'markdowns', year, `${slug}.md`))

export const mailTo = (to: string) => `mailto:${to}`

export const articleTo = (year: string, slug: string) => join('/', 'articles', year, slug)

export type PageType = 'about' | 'archive' | 'contact' | 'faq' | 'top' | 'news' | 'schedule'

export const pageTo = (page: PageType) => join('/', page)
