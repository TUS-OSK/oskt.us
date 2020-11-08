const externalUrlOrigin = {
  twitter: 'https://twitter.com',
  github: 'https://github.com',
}

type ExternalUrlType = keyof typeof externalUrlOrigin

export const externalTo = (type: ExternalUrlType, path: string) => [externalUrlOrigin[type], path].join('/')

const REPOSITORY_PATH = 'TUS-OSK/oskt.us'

export const urlPageMdEdit = (slug: string) =>
  externalTo('github', [REPOSITORY_PATH, 'edit', 'master', '_pages', 'markdowns', `${slug}.md`].join('/'))

export const urlArticleMdEdit = (year: string, slug: string) =>
  externalTo('github', [REPOSITORY_PATH, 'edit', 'master', '_articles', 'markdowns', year, `${slug}.md`].join('/'))

export const mailTo = (to: string) => `mailto:${to}`

export const articleTo = (year: string, slug: string) => ['/', 'articles', year, slug].join('/')

export type PageType = 'about' | 'archive' | 'contact' | 'faq' | 'top' | 'news' | 'schedule'

export const pageTo = (page: PageType) => ['/', page].join('/')
