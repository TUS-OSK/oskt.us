// ヘッダー・フッターに並べるページ。ここを直せば両方に反映される
export const NAV_ITEMS = [
  { label: '応数研とは', href: '/about' },
  { label: '班', href: '/teams' },
  { label: 'スケジュール', href: '/schedule' },
  { label: 'ニュース', href: '/news' },
  { label: 'FAQ', href: '/faq' },
  { label: 'ご連絡', href: '/contact' },
] as const

export const JOIN_ITEM = { label: '入部・見学', href: '/pay' } as const

export const FOOTER_EXTRA_ITEMS = [
  { label: '記事のアーカイブ', href: '/archive' },
  { label: '理大祭2023', href: '/ridaisai/2023' },
  { label: '理大祭2021', href: '/ridaisai/2021' },
  { label: '部の規約', href: '/articles/2023/club-rules' },
  { label: 'プライバシーポリシー', href: '/articles/2023/privacy-policy' },
] as const
