import { ReactNode } from 'react'
import SiteShell from 'src/components/ui/SiteShell'

interface Props {
  children: ReactNode
}

// 下層ページ共通の外枠。中身は SiteShell(黒地・ヘッダー・フッター)
export default function MainLayout({ children }: Props) {
  return <SiteShell>{children}</SiteShell>
}
